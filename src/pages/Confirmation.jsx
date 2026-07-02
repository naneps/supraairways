import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, Plane, Ticket, ArrowRight, Mail } from 'lucide-react';
import { airportByCode, formatIDR, minutesToDuration } from '../lib/data.js';
import { useBooking } from '../lib/store.jsx';

export default function Confirmation() {
  const { bookings } = useBooking();
  const location = useLocation();
  const pnr = location.state?.pnr;
  const booking = bookings.find((b) => b.pnr === pnr) || bookings[0];

  if (!booking) {
    return (
      <div className="appPage">
        <div className="appContainer emptyState">
          <Ticket size={40} strokeWidth={1.6} aria-hidden="true" />
          <h1>Belum ada pemesanan</h1>
          <p>Anda belum menyelesaikan pemesanan apa pun di sesi ini.</p>
          <Link className="btn btn-warning" to="/flights">Cari penerbangan</Link>
        </div>
      </div>
    );
  }

  const { flight, passenger, seat } = booking;
  const from = airportByCode(flight.from);
  const to = airportByCode(flight.to);
  const taxes = Math.round(flight.price * 0.11);
  const total = flight.price + taxes;

  return (
    <div className="appPage">
      <div className="appContainer confirmWrap">
        <div className="confirmHero" data-animate="rise">
          <span className="confirmIcon">
            <CheckCircle2 size={30} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <h1>Pembayaran berhasil. Selamat terbang!</h1>
          <p>
            <Mail size={15} strokeWidth={2.3} aria-hidden="true" /> E-tiket sudah dikirim ke{' '}
            {passenger.email || 'email Anda'}.
          </p>
        </div>

        <div className="eticket" data-animate="image">
          <div className="eticketMain">
            <div className="eticketTop">
              <span className="flightBadge">
                <Plane size={18} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div>
                <strong>Supra Airways</strong>
                <span>{flight.number} · {flight.aircraft}</span>
              </div>
            </div>
            <div className="eticketRoute">
              <div>
                <strong>{flight.depTime}</strong>
                <span>{from?.code} · {from?.city}</span>
              </div>
              <div className="eticketPath">
                <span>{minutesToDuration(flight.durationMin)}</span>
                <span className="flightLine" />
                <span>{flight.stops === 0 ? 'Langsung' : `${flight.stops} transit`}</span>
              </div>
              <div>
                <strong>{flight.arrTime}{flight.dayOffset > 0 && <sup>+{flight.dayOffset}</sup>}</strong>
                <span>{to?.code} · {to?.city}</span>
              </div>
            </div>
            <dl className="eticketFacts">
              <div><dt>Penumpang</dt><dd>{passenger.title} {passenger.name}</dd></div>
              <div><dt>Kelas</dt><dd>{flight.cabin}</dd></div>
              <div><dt>Kursi</dt><dd>{seat}</dd></div>
              <div><dt>Total dibayar</dt><dd>{formatIDR(total)}</dd></div>
            </dl>
          </div>
          <div className="eticketStub">
            <span className="stubLabel">Kode booking</span>
            <strong className="stubPnr">{booking.pnr}</strong>
            <div className="barcode" aria-hidden="true">
              {Array.from({ length: 42 }).map((_, i) => (
                <span key={i} style={{ width: `${(i % 4) + 1}px` }} />
              ))}
            </div>
            <span className="stubHint">Tunjukkan kode ini saat check-in</span>
          </div>
        </div>

        <div className="confirmActions">
          <Link className="btn btn-warning" to="/boarding">
            Lihat boarding pass
            <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </Link>
          <Link className="btn btn-ghost" to="/">Kembali ke beranda</Link>
        </div>
      </div>
    </div>
  );
}
