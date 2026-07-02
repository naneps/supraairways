import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftRight, Plane } from 'lucide-react';
import { airports, cabins } from '../lib/data.js';
import { useBooking } from '../lib/store.jsx';

const tripTypes = ['Pergi-pulang', 'Sekali jalan', 'Multi-kota'];

export default function SearchForm({ onSubmitNavigate = true }) {
  const { search, setSearch } = useBooking();
  const navigate = useNavigate();

  const swap = () => setSearch({ from: search.to, to: search.from });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmitNavigate) navigate('/flights');
  };

  return (
    <form className="bookingForm card" onSubmit={handleSubmit}>
      <div className="bookingTypes" role="tablist" aria-label="Jenis perjalanan">
        {tripTypes.map((type) => (
          <button
            key={type}
            type="button"
            className={search.tripType === type ? 'bookingType is-active' : 'bookingType'}
            aria-selected={search.tripType === type}
            onClick={() => setSearch({ tripType: type })}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="fieldPair">
        <label>
          Dari
          <select
            className="select select-bordered"
            value={search.from}
            aria-label="Kota asal"
            onChange={(e) => setSearch({ from: e.target.value })}
          >
            {airports.map((a) => (
              <option key={a.code} value={a.code}>
                {a.city} ({a.code})
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="swapButton" onClick={swap} aria-label="Tukar asal dan tujuan">
          <ArrowLeftRight size={16} strokeWidth={2.4} aria-hidden="true" />
        </button>
        <label>
          Menuju
          <select
            className="select select-bordered"
            value={search.to}
            aria-label="Kota tujuan"
            onChange={(e) => setSearch({ to: e.target.value })}
          >
            {airports.map((a) => (
              <option key={a.code} value={a.code}>
                {a.city} ({a.code})
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Tanggal berangkat
        <input
          className="input input-bordered"
          type="date"
          value={search.date}
          aria-label="Tanggal berangkat"
          onChange={(e) => setSearch({ date: e.target.value })}
        />
      </label>
      <label>
        Penumpang
        <select
          className="select select-bordered"
          value={search.passengers}
          aria-label="Jumlah penumpang"
          onChange={(e) => setSearch({ passengers: Number(e.target.value) })}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} penumpang
            </option>
          ))}
        </select>
      </label>
      <label className="fieldWide">
        Kabin
        <select
          className="select select-bordered"
          value={search.cabin}
          aria-label="Kelas kabin"
          onChange={(e) => setSearch({ cabin: e.target.value })}
        >
          {cabins.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>

      <button className="btn btn-warning" type="submit">
        <Plane size={18} strokeWidth={2.5} aria-hidden="true" />
        Cari penerbangan
      </button>
    </form>
  );
}
