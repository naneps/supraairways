import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Clock3, DoorOpen, Armchair, Ticket } from 'lucide-react';
import { airportByCode, demoBoardingPasses } from '../lib/data.js';
import { useBooking } from '../lib/store.jsx';

function boardingTimeFrom(depTime) {
  if (!depTime) return '--:--';
  const [h, m] = depTime.split(':').map(Number);
  const total = ((h * 60 + m - 40) + 1440) % 1440;
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

function BoardingPass({ pass }) {
  const from = airportByCode(pass.flight.from);
  const to = airportByCode(pass.flight.to);
  const boardingTime = pass.boardingTime || boardingTimeFrom(pass.flight.depTime);

  return (
    <article className="boardingPass" data-animate="image">
      <div className="passHeader">
        <div className="passBrand">
          <img src="/branding/supra-logo-icon.png" alt="" />
          <span>Supra Airways</span>
        </div>
        <span className="passClass">{pass.flight.cabin}</span>
      </div>

      <div className="passRoute">
        <div className="passCity">
          <strong>{from?.code}</strong>
          <span>{from?.city}</span>
        </div>
        <div className="passPlane">
          <span className="passLine" />
          <Plane size={20} strokeWidth={2} aria-hidden="true" />
          <span className="passLine" />
        </div>
        <div className="passCity right">
          <strong>{to?.code}</strong>
          <span>{to?.city}</span>
        </div>
      </div>

      <div className="passGrid">
        <div><span>Penumpang</span><strong>{pass.passenger.title} {pass.passenger.name}</strong></div>
        <div><span>Penerbangan</span><strong>{pass.flight.number}</strong></div>
        <div><span><Clock3 size={11} strokeWidth={2.4} /> Boarding</span><strong>{boardingTime}</strong></div>
        <div><span><DoorOpen size={11} strokeWidth={2.4} /> Gate</span><strong>{pass.gate}</strong></div>
        <div><span><Armchair size={11} strokeWidth={2.4} /> Kursi</span><strong>{pass.seat}</strong></div>
        <div><span>Grup</span><strong>{pass.boardingGroup}</strong></div>
      </div>

      <div className="passStub">
        <div>
          <span className="stubLabel">Kode booking</span>
          <strong className="stubPnr">{pass.pnr}</strong>
        </div>
        <div className="barcode" aria-hidden="true">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} style={{ width: `${(i % 4) + 1}px` }} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Boarding() {
  const { bookings } = useBooking();
  const passes = [...bookings, ...demoBoardingPasses];

  return (
    <div className="appPage">
      <div className="appContainer">
        <header className="resultsHead">
          <div>
            <p className="eyebrow">Wallet</p>
            <h1 className="resultsTitle">Boarding pass Anda</h1>
            <p className="resultsSub">
              {bookings.length > 0
                ? `${bookings.length} boarding pass dari pemesanan Anda, plus contoh.`
                : 'Belum ada pemesanan di sesi ini. Berikut contoh boarding pass.'}
            </p>
          </div>
          <Link className="btn btn-ghost editSearchBtn" to="/flights">
            <Ticket size={16} strokeWidth={2.3} aria-hidden="true" />
            Pesan lagi
          </Link>
        </header>

        <div className="passGridWrap">
          {passes.map((pass) => (
            <BoardingPass key={pass.pnr} pass={pass} />
          ))}
        </div>
      </div>
    </div>
  );
}
