import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Plane, Timer, ShieldCheck, CreditCard, Check } from 'lucide-react';
import { airportByCode, formatIDR, minutesToDuration } from '../lib/data.js';
import { useBooking } from '../lib/store.jsx';

const SEAT_ROWS = 8;
const SEAT_COLS = ['A', 'B', 'C', 'D', 'E', 'F'];

function isOccupied(flightId, row, col) {
  const key = `${flightId}${row}${col}`;
  let h = 0;
  for (let i = 0; i < key.length; i += 1) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h % 5 === 0;
}

const steps = ['Penumpang', 'Kursi', 'Pembayaran'];

export default function Book() {
  const { selectedFlight, search, confirmBooking } = useBooking();
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);
  const [seat, setSeat] = React.useState(null);
  const [form, setForm] = React.useState({
    title: 'Tuan',
    name: '',
    email: '',
    phone: '',
    doc: '',
    card: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  React.useEffect(() => {
    if (!selectedFlight) navigate('/flights', { replace: true });
  }, [selectedFlight, navigate]);

  if (!selectedFlight) return null;

  const from = airportByCode(selectedFlight.from);
  const to = airportByCode(selectedFlight.to);
  const set = (patch) => setForm((prev) => ({ ...prev, ...patch }));

  const taxes = Math.round(selectedFlight.price * 0.11);
  const total = selectedFlight.price + taxes;

  const canContinuePassenger = form.name && form.email && form.phone;
  const canPay = form.card && form.cardName && form.expiry && form.cvv;

  const submit = (event) => {
    event.preventDefault();
    const booking = confirmBooking({
      flight: selectedFlight,
      passengerInfo: {
        title: form.title,
        name: form.name,
        email: form.email,
        phone: form.phone,
        doc: form.doc,
      },
      seat,
    });
    navigate('/confirmation', { state: { pnr: booking.pnr } });
  };

  return (
    <div className="appPage">
      <div className="appContainer bookLayout">
        <div className="bookMain">
          <Link to="/flights" className="backLink">
            <ArrowLeft size={16} strokeWidth={2.3} aria-hidden="true" />
            Kembali ke daftar penerbangan
          </Link>

          <ol className="stepper" aria-label="Langkah pemesanan">
            {steps.map((label, index) => (
              <li
                key={label}
                className={
                  index === step ? 'stepItem is-active' : index < step ? 'stepItem is-done' : 'stepItem'
                }
              >
                <span className="stepDot">{index < step ? <Check size={14} strokeWidth={3} /> : index + 1}</span>
                {label}
              </li>
            ))}
          </ol>

          {step === 0 && (
            <form
              className="panel"
              onSubmit={(e) => {
                e.preventDefault();
                setStep(1);
              }}
            >
              <h2 className="panelTitle">Data penumpang</h2>
              <p className="panelHint">Isi persis seperti pada dokumen identitas Anda.</p>
              <div className="formGrid">
                <label className="fieldSmall">
                  Sapaan
                  <select className="select select-bordered" value={form.title} onChange={(e) => set({ title: e.target.value })}>
                    {['Tuan', 'Nyonya', 'Nona'].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="fieldGrow">
                  Nama lengkap
                  <input
                    className="input input-bordered"
                    placeholder="Sesuai KTP / paspor"
                    value={form.name}
                    onChange={(e) => set({ name: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    className="input input-bordered"
                    type="email"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={(e) => set({ email: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Nomor telepon
                  <input
                    className="input input-bordered"
                    placeholder="0812xxxxxxx"
                    value={form.phone}
                    onChange={(e) => set({ phone: e.target.value })}
                    required
                  />
                </label>
                <label className="fieldWide">
                  Nomor KTP / paspor (opsional)
                  <input
                    className="input input-bordered"
                    placeholder="Untuk penerbangan internasional"
                    value={form.doc}
                    onChange={(e) => set({ doc: e.target.value })}
                  />
                </label>
              </div>
              <button className="btn btn-warning panelCta" type="submit" disabled={!canContinuePassenger}>
                Lanjut pilih kursi
                <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
              </button>
            </form>
          )}

          {step === 1 && (
            <div className="panel">
              <h2 className="panelTitle">Pilih kursi</h2>
              <p className="panelHint">Kursi abu-abu sudah terisi. Kursi pilihan Anda ditandai emas.</p>
              <div className="cabinLegend">
                <span><i className="seatDot free" /> Tersedia</span>
                <span><i className="seatDot taken" /> Terisi</span>
                <span><i className="seatDot picked" /> Pilihan Anda</span>
              </div>
              <div className="seatMap">
                <div className="seatColLabels">
                  <span /> {SEAT_COLS.map((c, i) => (
                    <span key={c} className={i === 2 ? 'aisleAfter' : undefined}>{c}</span>
                  ))}
                </div>
                {Array.from({ length: SEAT_ROWS }, (_, r) => r + 1).map((row) => (
                  <div className="seatRow" key={row}>
                    <span className="rowNum">{row}</span>
                    {SEAT_COLS.map((col, i) => {
                      const id = `${row}${col}`;
                      const taken = isOccupied(selectedFlight.id, row, col);
                      const picked = seat === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          disabled={taken}
                          className={`seat ${taken ? 'taken' : picked ? 'picked' : 'free'} ${
                            i === 2 ? 'aisleAfter' : ''
                          }`}
                          aria-label={`Kursi ${id}`}
                          aria-pressed={picked}
                          onClick={() => setSeat(id)}
                        >
                          {id}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="panelActions">
                <button className="btn btn-ghost" type="button" onClick={() => setStep(0)}>
                  <ArrowLeft size={16} strokeWidth={2.3} aria-hidden="true" />
                  Kembali
                </button>
                <button className="btn btn-warning" type="button" onClick={() => setStep(2)}>
                  {seat ? `Lanjut, kursi ${seat}` : 'Lewati, pilihkan kursi'}
                  <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form className="panel" onSubmit={submit}>
              <h2 className="panelTitle">Pembayaran</h2>
              <p className="panelHint">
                <ShieldCheck size={15} strokeWidth={2.3} aria-hidden="true" /> Ini demo. Jangan
                masukkan nomor kartu asli.
              </p>
              <div className="formGrid">
                <label className="fieldWide">
                  Nomor kartu
                  <input
                    className="input input-bordered"
                    inputMode="numeric"
                    placeholder="4111 1111 1111 1111"
                    value={form.card}
                    onChange={(e) => set({ card: e.target.value })}
                    required
                  />
                </label>
                <label className="fieldWide">
                  Nama pada kartu
                  <input
                    className="input input-bordered"
                    placeholder="Nama pemegang kartu"
                    value={form.cardName}
                    onChange={(e) => set({ cardName: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Berlaku hingga
                  <input
                    className="input input-bordered"
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={(e) => set({ expiry: e.target.value })}
                    required
                  />
                </label>
                <label>
                  CVV
                  <input
                    className="input input-bordered"
                    inputMode="numeric"
                    placeholder="123"
                    value={form.cvv}
                    onChange={(e) => set({ cvv: e.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="panelActions">
                <button className="btn btn-ghost" type="button" onClick={() => setStep(1)}>
                  <ArrowLeft size={16} strokeWidth={2.3} aria-hidden="true" />
                  Kembali
                </button>
                <button className="btn btn-warning" type="submit" disabled={!canPay}>
                  <CreditCard size={16} strokeWidth={2.4} aria-hidden="true" />
                  Bayar {formatIDR(total)}
                </button>
              </div>
            </form>
          )}
        </div>

        <aside className="fareSummary" aria-label="Ringkasan pemesanan">
          <div className="fareRoute">
            <span className="flightBadge">
              <Plane size={18} strokeWidth={2.2} aria-hidden="true" />
            </span>
            <div>
              <strong>{from?.city} ke {to?.city}</strong>
              <span>{selectedFlight.number} · {search.cabin}</span>
            </div>
          </div>
          <div className="fareTimes">
            <div>
              <strong>{selectedFlight.depTime}</strong>
              <span>{selectedFlight.from}</span>
            </div>
            <div className="fareDuration">
              <Timer size={13} strokeWidth={2.3} aria-hidden="true" />
              {minutesToDuration(selectedFlight.durationMin)}
              <small>{selectedFlight.stops === 0 ? 'Langsung' : `${selectedFlight.stops} transit`}</small>
            </div>
            <div>
              <strong>{selectedFlight.arrTime}</strong>
              <span>{selectedFlight.to}</span>
            </div>
          </div>
          {seat && <div className="fareSeat">Kursi terpilih <strong>{seat}</strong></div>}
          <dl className="fareBreakdown">
            <div>
              <dt>Tarif dewasa (x{search.passengers})</dt>
              <dd>{formatIDR(selectedFlight.price)}</dd>
            </div>
            <div>
              <dt>Pajak dan biaya</dt>
              <dd>{formatIDR(taxes)}</dd>
            </div>
            <div className="fareTotal">
              <dt>Total</dt>
              <dd>{formatIDR(total)}</dd>
            </div>
          </dl>
          <p className="fareNote">Harga sudah termasuk pajak. Pembatalan gratis dalam 24 jam.</p>
        </aside>
      </div>
    </div>
  );
}
