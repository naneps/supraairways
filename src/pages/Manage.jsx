import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Plane, Timer, CheckCircle2, AlertCircle, Ticket, ArrowRight } from 'lucide-react';
import { airportByCode, demoBoardingPasses, minutesToDuration } from '../lib/data.js';
import { useBooking } from '../lib/store.jsx';

export default function Manage() {
  const { bookings } = useBooking();
  const [pnr, setPnr] = React.useState('');
  const [name, setName] = React.useState('');
  const [result, setResult] = React.useState(null); // null | 'notfound' | booking

  const pool = [...bookings, ...demoBoardingPasses];

  const lookup = (event) => {
    event.preventDefault();
    const code = pnr.trim().toUpperCase();
    const found = pool.find((b) => b.pnr.toUpperCase() === code);
    if (!found) {
      setResult('notfound');
      return;
    }
    if (name.trim()) {
      const surname = name.trim().toLowerCase();
      if (!found.passenger.name.toLowerCase().includes(surname)) {
        setResult('notfound');
        return;
      }
    }
    setResult(found);
  };

  const from = result && result !== 'notfound' ? airportByCode(result.flight.from) : null;
  const to = result && result !== 'notfound' ? airportByCode(result.flight.to) : null;

  return (
    <div className="appPage">
      <div className="appContainer manageWrap">
        <header className="manageHead">
          <p className="eyebrow">Check-in dan kelola</p>
          <h1 className="resultsTitle">Kelola pemesanan Anda</h1>
          <p className="resultsSub">
            Masukkan kode booking untuk cek status, kursi, dan gate. Coba kode contoh{' '}
            <button
              type="button"
              className="pnrHint"
              onClick={() => {
                setPnr('SQ7X2A');
                setName('');
              }}
            >
              SQ7X2A
            </button>
            .
          </p>
        </header>

        <form className="managePanel" onSubmit={lookup}>
          <label className="fieldGrow">
            Kode booking (PNR)
            <input
              className="input input-bordered"
              placeholder="6 karakter, mis. SQ7X2A"
              value={pnr}
              maxLength={6}
              onChange={(e) => setPnr(e.target.value.toUpperCase())}
              required
            />
          </label>
          <label className="fieldGrow">
            Nama belakang (opsional)
            <input
              className="input input-bordered"
              placeholder="Sesuai pemesanan"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button className="btn btn-warning manageSubmit" type="submit">
            <Search size={17} strokeWidth={2.4} aria-hidden="true" />
            Cari pemesanan
          </button>
        </form>

        {result === 'notfound' && (
          <div className="manageResult notfound" data-animate="rise">
            <AlertCircle size={22} strokeWidth={2.2} aria-hidden="true" />
            <div>
              <strong>Pemesanan tidak ditemukan</strong>
              <span>Periksa kembali kode booking Anda, atau pesan penerbangan baru.</span>
            </div>
            <Link className="btn btn-ghost" to="/flights">Cari penerbangan</Link>
          </div>
        )}

        {result && result !== 'notfound' && (
          <div className="manageCard" data-animate="image">
            <div className="manageStatus">
              <CheckCircle2 size={18} strokeWidth={2.3} aria-hidden="true" />
              Terkonfirmasi · siap check-in
            </div>
            <div className="manageRoute">
              <div className="manageAirline">
                <span className="flightBadge">
                  <Plane size={18} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <div>
                  <strong>{from?.city} ke {to?.city}</strong>
                  <span>{result.flight.number} · {result.flight.cabin}</span>
                </div>
              </div>
              <div className="managePnr">
                <span>Kode booking</span>
                <strong>{result.pnr}</strong>
              </div>
            </div>
            <div className="manageTimes">
              <div>
                <strong>{result.flight.depTime}</strong>
                <span>{from?.code}</span>
              </div>
              <div className="manageDur">
                <Timer size={13} strokeWidth={2.3} aria-hidden="true" />
                {result.flight.durationMin ? minutesToDuration(result.flight.durationMin) : 'Terjadwal'}
              </div>
              <div>
                <strong>{result.flight.arrTime || '—'}</strong>
                <span>{to?.code}</span>
              </div>
            </div>
            <dl className="manageFacts">
              <div><dt>Penumpang</dt><dd>{result.passenger.title} {result.passenger.name}</dd></div>
              <div><dt>Kursi</dt><dd>{result.seat || 'Belum dipilih'}</dd></div>
              <div><dt>Gate</dt><dd>{result.gate || 'TBA'}</dd></div>
              <div><dt>Grup boarding</dt><dd>{result.boardingGroup || '—'}</dd></div>
            </dl>
            <div className="manageActions">
              <Link className="btn btn-warning" to="/boarding">
                <Ticket size={16} strokeWidth={2.4} aria-hidden="true" />
                Lihat boarding pass
                <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
