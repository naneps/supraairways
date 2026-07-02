import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plane, SlidersHorizontal, Armchair, Timer } from 'lucide-react';
import {
  airportByCode,
  cabins,
  formatIDR,
  generateFlights,
  minutesToDuration,
} from '../lib/data.js';
import { useBooking } from '../lib/store.jsx';
import SearchForm from '../components/SearchForm.jsx';

const sortOptions = [
  ['price', 'Termurah'],
  ['depTime', 'Paling pagi'],
  ['durationMin', 'Tercepat'],
];

export default function Flights() {
  const { search, setSearch, selectFlight } = useBooking();
  const navigate = useNavigate();
  const [editing, setEditing] = React.useState(false);
  const [sort, setSort] = React.useState('price');

  const from = airportByCode(search.from);
  const to = airportByCode(search.to);

  const flights = React.useMemo(() => {
    const list = generateFlights(search);
    return [...list].sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'depTime') return a.depTime.localeCompare(b.depTime);
      return a.durationMin - b.durationMin;
    });
  }, [search, sort]);

  const choose = (flight) => {
    selectFlight(flight);
    navigate('/book');
  };

  return (
    <div className="appPage">
      <div className="appContainer">
        <header className="resultsHead">
          <div>
            <p className="eyebrow">Penerbangan tersedia</p>
            <h1 className="resultsTitle">
              {from?.city} <span className="routeArrow"><Plane size={22} strokeWidth={2} /></span> {to?.city}
            </h1>
            <p className="resultsSub">
              {search.date || 'Tanggal fleksibel'} · {search.passengers} penumpang · {search.cabin} ·{' '}
              {flights.length} penerbangan
            </p>
          </div>
          <button className="btn btn-ghost editSearchBtn" type="button" onClick={() => setEditing((v) => !v)}>
            <SlidersHorizontal size={16} strokeWidth={2.3} aria-hidden="true" />
            {editing ? 'Tutup' : 'Ubah pencarian'}
          </button>
        </header>

        {editing && (
          <div className="resultsSearch">
            <SearchForm onSubmitNavigate={false} />
          </div>
        )}

        <div className="resultsToolbar">
          <div className="cabinTabs" role="tablist" aria-label="Kelas kabin">
            {cabins.map((c) => (
              <button
                key={c}
                type="button"
                className={search.cabin === c ? 'cabinTab is-active' : 'cabinTab'}
                aria-selected={search.cabin === c}
                onClick={() => setSearch({ cabin: c })}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="sortGroup">
            <span>Urutkan</span>
            {sortOptions.map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={sort === key ? 'sortChip is-active' : 'sortChip'}
                onClick={() => setSort(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <ul className="flightList">
          {flights.map((flight) => (
            <li className="flightCard" key={flight.id} data-animate="rise">
              <div className="flightAirline">
                <span className="flightBadge">
                  <Plane size={18} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <div>
                  <strong>Supra Airways</strong>
                  <span>{flight.number} · {flight.aircraft}</span>
                </div>
              </div>

              <div className="flightTimes">
                <div className="timePoint">
                  <strong>{flight.depTime}</strong>
                  <span>{flight.from}</span>
                </div>
                <div className="flightPath">
                  <span className="flightDuration">
                    <Timer size={13} strokeWidth={2.3} aria-hidden="true" />
                    {minutesToDuration(flight.durationMin)}
                  </span>
                  <span className="flightLine" />
                  <span className="flightStops">
                    {flight.stops === 0 ? 'Langsung' : `${flight.stops} transit`}
                  </span>
                </div>
                <div className="timePoint">
                  <strong>
                    {flight.arrTime}
                    {flight.dayOffset > 0 && <sup>+{flight.dayOffset}</sup>}
                  </strong>
                  <span>{flight.to}</span>
                </div>
              </div>

              <div className="flightBuy">
                <span className="flightSeats">
                  <Armchair size={13} strokeWidth={2.3} aria-hidden="true" />
                  {flight.seatsLeft} kursi tersisa
                </span>
                <strong className="flightPrice">{formatIDR(flight.price)}</strong>
                <button className="btn btn-warning" type="button" onClick={() => choose(flight)}>
                  Pilih
                  <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
