// Shared dummy data + helpers for the Supra Airways demo app.
// Everything here is fictional and for a portfolio/demo build only.

export const assets = {
  logoFull: '/branding/supra-logo-full.png',
  logoIcon: '/branding/supra-logo-icon.png',
  lounge: '/branding/showcase-lounge.png',
  boardroom: '/branding/showcase-boardroom.png',
  checkin: '/branding/showcase-checkin.png',
  reception: '/branding/showcase-reception.png',
  boardGroup: '/branding/directors/board-group.png',
};

export const airports = [
  { code: 'CGK', city: 'Jakarta', name: 'Soekarno-Hatta' },
  { code: 'DPS', city: 'Denpasar', name: 'Ngurah Rai' },
  { code: 'SUB', city: 'Surabaya', name: 'Juanda' },
  { code: 'SIN', city: 'Singapura', name: 'Changi' },
  { code: 'KUL', city: 'Kuala Lumpur', name: 'KLIA' },
  { code: 'HKG', city: 'Hong Kong', name: 'Chek Lap Kok' },
  { code: 'NRT', city: 'Tokyo', name: 'Narita' },
  { code: 'ICN', city: 'Seoul', name: 'Incheon' },
  { code: 'BKK', city: 'Bangkok', name: 'Suvarnabhumi' },
  { code: 'SYD', city: 'Sydney', name: 'Kingsford Smith' },
  { code: 'DXB', city: 'Dubai', name: 'DXB International' },
  { code: 'LHR', city: 'London', name: 'Heathrow' },
];

export const cabins = ['Economy', 'Premium Economy', 'Business'];

const cabinMultiplier = {
  Economy: 1,
  'Premium Economy': 1.7,
  Business: 3.1,
};

const aircraftTypes = [
  'Airbus A350-900',
  'Boeing 787-9 Dreamliner',
  'Airbus A330-300',
  'Boeing 737 MAX 8',
];

export const featuredDestinations = [
  { code: 'NRT', city: 'Tokyo', country: 'Jepang', price: 8450000, duration: '7j 10m', seed: 'tokyo-night-street' },
  { code: 'SIN', city: 'Singapura', country: 'Singapura', price: 2150000, duration: '1j 50m', seed: 'singapore-marina-bay' },
  { code: 'HKG', city: 'Hong Kong', country: 'Hong Kong', price: 4980000, duration: '4j 55m', seed: 'hongkong-skyline-harbour' },
  { code: 'SYD', city: 'Sydney', country: 'Australia', price: 9120000, duration: '6j 40m', seed: 'sydney-opera-house' },
  { code: 'DPS', city: 'Bali', country: 'Indonesia', price: 1180000, duration: '1j 45m', seed: 'bali-rice-terrace' },
  { code: 'DXB', city: 'Dubai', country: 'Uni Emirat Arab', price: 11250000, duration: '9j 05m', seed: 'dubai-desert-skyline' },
];

// A couple of pre-made passes so the wallet / check-in is never empty in the demo.
export const demoBoardingPasses = [
  {
    pnr: 'SQ7X2A',
    passenger: { title: 'Nyonya', name: 'Larasati Wibowo' },
    flight: { number: 'SA 215', from: 'CGK', to: 'SIN', depTime: '08:30', cabin: 'Business' },
    seat: '3A',
    gate: 12,
    boardingGroup: 'A',
    boardingTime: '08:00',
    demo: true,
  },
  {
    pnr: 'KD9M4T',
    passenger: { title: 'Tuan', name: 'Bagas Prakoso' },
    flight: { number: 'SA 703', from: 'CGK', to: 'HKG', depTime: '11:20', cabin: 'Premium Economy' },
    seat: '18C',
    gate: 5,
    boardingGroup: 'B',
    boardingTime: '10:45',
    demo: true,
  },
];

export function airportByCode(code) {
  return airports.find((a) => a.code === code);
}

export function formatIDR(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function destinationImage(seed, w = 800, h = 1000) {
  return `https://picsum.photos/seed/supra-${seed}/${w}/${h}`;
}

function minutesToTime(min) {
  const total = ((min % 1440) + 1440) % 1440;
  const hh = String(Math.floor(total / 60)).padStart(2, '0');
  const mm = String(total % 60).padStart(2, '0');
  return `${hh}:${mm}`;
}

export function minutesToDuration(min) {
  const hh = Math.floor(min / 60);
  const mm = min % 60;
  return `${hh}j ${String(mm).padStart(2, '0')}m`;
}

// Small deterministic PRNG so a given route+date always yields the same flights.
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateFlights({ from, to, date, cabin = 'Economy' }) {
  const rand = mulberry32(hashString(`${from}-${to}-${date || 'any'}`));
  const count = 6;
  const flights = [];
  let depMinutes = 5 * 60 + Math.floor(rand() * 90); // first flight around 05:00-06:30

  for (let i = 0; i < count; i += 1) {
    const durationMin = 95 + Math.floor(rand() * 430);
    const stops = rand() < 0.58 ? 0 : 1;
    const base = 780000 + Math.floor(rand() * 3600000);
    const price = Math.round((base * (cabinMultiplier[cabin] || 1)) / 10000) * 10000;
    const arrMinutes = depMinutes + durationMin + (stops ? 55 + Math.floor(rand() * 40) : 0);
    const dayOffset = Math.floor(arrMinutes / 1440);
    const seatsLeft = 3 + Math.floor(rand() * 28);

    flights.push({
      id: `${from}${to}${i}`,
      number: `SA ${200 + Math.floor(rand() * 780)}`,
      from,
      to,
      cabin,
      depTime: minutesToTime(depMinutes),
      arrTime: minutesToTime(arrMinutes),
      dayOffset,
      durationMin: arrMinutes - depMinutes,
      stops,
      aircraft: aircraftTypes[Math.floor(rand() * aircraftTypes.length)],
      price,
      seatsLeft,
      onTime: rand() > 0.12,
    });

    depMinutes += 120 + Math.floor(rand() * 190);
  }

  return flights.sort((a, b) => a.depTime.localeCompare(b.depTime));
}

export function generatePNR() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
  let out = '';
  for (let i = 0; i < 6; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

export function randomSeat() {
  const row = 1 + Math.floor(Math.random() * 32);
  const col = 'ABCDEF'[Math.floor(Math.random() * 6)];
  return `${row}${col}`;
}

export function todayISO() {
  const now = new Date();
  const tz = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - tz).toISOString().slice(0, 10);
}
