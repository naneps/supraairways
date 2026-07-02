import React from 'react';
import { generatePNR, randomSeat, todayISO } from './data.js';

const BookingContext = React.createContext(null);

const STORAGE_KEY = 'supra-booking-state';

const defaultSearch = {
  tripType: 'Pergi-pulang',
  from: 'CGK',
  to: 'NRT',
  date: todayISO(),
  returnDate: '',
  cabin: 'Business',
  passengers: 1,
};

function loadState() {
  if (typeof sessionStorage === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function BookingProvider({ children }) {
  const persisted = loadState();
  const [search, setSearchState] = React.useState(persisted?.search || defaultSearch);
  const [selectedFlight, setSelectedFlight] = React.useState(persisted?.selectedFlight || null);
  const [passenger, setPassenger] = React.useState(persisted?.passenger || null);
  const [bookings, setBookings] = React.useState(persisted?.bookings || []);

  React.useEffect(() => {
    if (typeof sessionStorage === 'undefined') return;
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ search, selectedFlight, passenger, bookings }),
    );
  }, [search, selectedFlight, passenger, bookings]);

  const setSearch = React.useCallback((patch) => {
    setSearchState((prev) => ({ ...prev, ...patch }));
  }, []);

  const selectFlight = React.useCallback((flight) => {
    setSelectedFlight(flight);
  }, []);

  const confirmBooking = React.useCallback(
    ({ flight, passengerInfo, seat }) => {
      const booking = {
        pnr: generatePNR(),
        flight,
        passenger: passengerInfo,
        seat: seat || randomSeat(),
        boardingGroup: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
        gate: 1 + Math.floor(Math.random() * 24),
        createdAt: new Date().toISOString(),
      };
      setPassenger(passengerInfo);
      setBookings((prev) => [booking, ...prev]);
      return booking;
    },
    [],
  );

  const value = React.useMemo(
    () => ({
      search,
      setSearch,
      selectedFlight,
      selectFlight,
      passenger,
      bookings,
      confirmBooking,
    }),
    [search, setSearch, selectedFlight, selectFlight, passenger, bookings, confirmBooking],
  );

  return React.createElement(BookingContext.Provider, { value }, children);
}

export function useBooking() {
  const ctx = React.useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
