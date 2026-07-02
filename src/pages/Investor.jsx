import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  TrendingUp,
  FileText,
  Download,
  CalendarDays,
  Mail,
  Phone,
  MapPin,
  Landmark,
  ShieldCheck,
} from 'lucide-react';

const financials = [
  ['Rp 8,7 T', 'Pendapatan 2025', '+18,4% YoY'],
  ['Rp 1,12 T', 'Laba bersih 2025', '+24,1% YoY'],
  ['22,6%', 'Marjin EBITDA', '+2,3 poin'],
  ['9,4 juta', 'Penumpang diangkut', '+15,7% YoY'],
  ['84,3%', 'Tingkat keterisian', '+1,9 poin'],
  ['42', 'Rute aktif', '+6 rute baru'],
];

const revenue = [
  { year: '2021', value: 3.1 },
  { year: '2022', value: 2.4 },
  { year: '2023', value: 4.8 },
  { year: '2024', value: 7.3 },
  { year: '2025', value: 8.7 },
];

const shareholders = [
  { label: 'Pengendali (PT Supra Investama)', pct: 52, color: '#d4a24d' },
  { label: 'Masyarakat / publik', pct: 33, color: '#16304b' },
  { label: 'Institusi & reksa dana', pct: 15, color: '#b9272b' },
];

const events = [
  ['25 Jul 2026', 'Paparan Kinerja Semester I 2026'],
  ['14 Agu 2026', 'Public Expose Tahunan'],
  ['30 Sep 2026', 'RUPS Luar Biasa Pemegang Saham'],
];

const reports = [
  ['Laporan Tahunan 2025', '4,2 MB'],
  ['Laporan Keuangan Konsolidasi Q1 2026', '1,8 MB'],
  ['Prospektus Penawaran Umum Perdana', '6,5 MB'],
  ['Materi Public Expose 2025', '2,1 MB'],
];

const maxRevenue = Math.max(...revenue.map((r) => r.value));

const donutGradient = (() => {
  let acc = 0;
  const stops = shareholders.map((s) => {
    const start = acc;
    acc += s.pct;
    return `${s.color} ${start}% ${acc}%`;
  });
  return `conic-gradient(${stops.join(', ')})`;
})();

export default function Investor() {
  return (
    <div className="appPage">
      <div className="appContainer investorWrap">
        <header className="investorHero" data-animate="rise">
          <div>
            <p className="eyebrow">Hubungan investor</p>
            <h1>Tumbuh bersama Supra Airways.</h1>
            <p className="aboutLead">
              Sebagai perusahaan terbuka, kami berkomitmen pada transparansi, tata kelola yang baik,
              dan pertumbuhan yang berkelanjutan. Temukan informasi saham, kinerja keuangan, dan
              agenda korporat PT Supra Airways Tbk di sini.
            </p>
          </div>
          <div className="tickerCard">
            <div className="tickerTop">
              <span className="tickerExchange">
                <Landmark size={15} strokeWidth={2.3} aria-hidden="true" /> IDX
              </span>
              <strong>SUPR</strong>
            </div>
            <div className="tickerPrice">
              Rp 1.845
              <span className="tickerChange up">
                <ArrowUpRight size={16} strokeWidth={2.6} aria-hidden="true" />
                +2,3%
              </span>
            </div>
            <div className="tickerMeta">Per 2 Jul 2026, 16:00 WIB · data ilustrasi</div>
          </div>
        </header>

        <section className="investorSection" data-animate="section">
          <div className="sectionIntro compact">
            <p className="eyebrow">Ikhtisar keuangan</p>
            <h2>Kinerja 2025 secara ringkas.</h2>
          </div>
          <div className="finGrid">
            {financials.map(([value, label, delta]) => (
              <article className="finCard" key={label} data-animate="rise">
                <strong>{value}</strong>
                <span className="finLabel">{label}</span>
                <span className="finDelta">
                  <TrendingUp size={13} strokeWidth={2.4} aria-hidden="true" />
                  {delta}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="investorSplit" data-animate="section">
          <article className="chartCard">
            <h3>Pertumbuhan pendapatan</h3>
            <span className="chartUnit">dalam triliun Rupiah</span>
            <div className="revChart">
              {revenue.map((r) => (
                <div className="revBar" key={r.year}>
                  <span className="revValue">{r.value.toString().replace('.', ',')}</span>
                  <div className="revColumn" style={{ height: `${(r.value / maxRevenue) * 100}%` }} />
                  <span className="revYear">{r.year}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="chartCard">
            <h3>Komposisi pemegang saham</h3>
            <span className="chartUnit">per 30 Juni 2026</span>
            <div className="donutWrap">
              <div className="donut" style={{ background: donutGradient }}>
                <div className="donutHole">
                  <strong>SUPR</strong>
                  <span>Tbk</span>
                </div>
              </div>
              <ul className="donutLegend">
                {shareholders.map((s) => (
                  <li key={s.label}>
                    <i style={{ background: s.color }} />
                    <span>{s.label}</span>
                    <strong>{s.pct}%</strong>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className="investorSplit alt" data-animate="section">
          <article className="reportsCard">
            <div className="sectionIntro compact">
              <p className="eyebrow">Laporan &amp; dokumen</p>
              <h2>Unduhan investor.</h2>
            </div>
            <ul className="reportList">
              {reports.map(([title, size]) => (
                <li key={title}>
                  <span className="reportIcon">
                    <FileText size={18} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                  <div className="reportInfo">
                    <strong>{title}</strong>
                    <span>PDF · {size} · ilustrasi</span>
                  </div>
                  <button type="button" className="reportBtn" aria-label={`Unduh ${title}`}>
                    <Download size={17} strokeWidth={2.3} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </article>

          <article className="eventsCard">
            <div className="sectionIntro compact">
              <p className="eyebrow">Agenda korporat</p>
              <h2>Kalender investor.</h2>
            </div>
            <ul className="eventList">
              {events.map(([date, title]) => (
                <li key={title}>
                  <span className="eventDate">
                    <CalendarDays size={15} strokeWidth={2.3} aria-hidden="true" />
                    {date}
                  </span>
                  <strong>{title}</strong>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="irContact" data-animate="rise">
          <div>
            <p className="eyebrow">Kontak</p>
            <h2>Tim Hubungan Investor</h2>
            <p>Untuk pertanyaan investor, analis, dan media terkait perusahaan.</p>
          </div>
          <ul className="irContactList">
            <li>
              <Mail size={17} strokeWidth={2.3} aria-hidden="true" />
              investor@supraairways.co.id
            </li>
            <li>
              <Phone size={17} strokeWidth={2.3} aria-hidden="true" />
              +62 21 5000 1945
            </li>
            <li>
              <MapPin size={17} strokeWidth={2.3} aria-hidden="true" />
              Menara Supra, Jl. Angkasa Raya No. 17, Jakarta Pusat 10610
            </li>
          </ul>
          <Link className="btn btn-ghost" to="/#directors">Lihat tata kelola &amp; direksi</Link>
        </section>

        <p className="investorNote">
          <ShieldCheck size={14} strokeWidth={2.3} aria-hidden="true" />
          PT Supra Airways Tbk adalah perusahaan fiktif. Seluruh angka, kode saham, dan dokumen di
          halaman ini bersifat ilustratif untuk keperluan demo dan bukan data keuangan sebenarnya.
        </p>
      </div>
    </div>
  );
}
