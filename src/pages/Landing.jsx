import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Coffee,
  Plane,
  Sparkles,
  ShieldCheck,
  Ticket,
  Wifi,
} from 'lucide-react';
import { assets, featuredDestinations, formatIDR, destinationImage } from '../lib/data.js';
import SearchForm from '../components/SearchForm.jsx';

const routes = [
  ['08:30', 'Singapura', 'SA 215', '12', 'Tepat waktu'],
  ['09:45', 'Kuala Lumpur', 'SA 817', '10', 'Tepat waktu'],
  ['11:20', 'Hong Kong', 'SA 703', '11', 'Boarding'],
  ['13:10', 'Tokyo (NRT)', 'SA 625', '09', 'Tepat waktu'],
  ['15:40', 'Sydney', 'SA 247', '08', 'Tepat waktu'],
];

const metrics = [
  ['42', 'destinasi di Asia Pasifik dan sekitarnya'],
  ['97,4%', 'penerbangan berangkat tepat waktu sepanjang tahun'],
  ['18', 'lounge premium untuk transit yang nyaman'],
  ['24/7', 'layanan penumpang yang selalu siap membantu'],
];

const serviceLines = [
  {
    icon: Plane,
    title: 'Check-in dalam hitungan menit',
    text: 'Pindai boarding pass, titip bagasi, dan langsung menuju gate. Tanpa antrean panjang, tanpa bingung mencari arah.',
  },
  {
    icon: Clock3,
    title: 'Selalu tahu apa yang terjadi',
    text: 'Jadwal, gate, dan status penerbangan tampil real-time, sejelas layar keberangkatan yang bisa dibaca sekali lirik.',
  },
  {
    icon: BadgeCheck,
    title: 'Disambut, bukan sekadar dilayani',
    text: 'Setiap penumpang bertemu kru yang sama sigapnya: hangat saat menyambut, sigap saat dibutuhkan, di darat maupun di udara.',
  },
];

const showcases = [
  {
    label: 'Lounge',
    title: 'Waktu transit yang terasa singkat',
    image: assets.lounge,
    text: 'Kopi hangat, wifi cepat, dan sudut tenang untuk bekerja atau sekadar melepas penat sebelum lepas landas.',
  },
  {
    label: 'Keberangkatan',
    title: 'Menuju gate tanpa ragu',
    image: assets.checkin,
    text: 'Petunjuk yang jelas di setiap sudut terminal membuat Anda selalu tahu langkah berikutnya.',
  },
  {
    label: 'Corporate',
    title: 'Rekan perjalanan bisnis Anda',
    image: assets.boardroom,
    text: 'Program corporate travel yang menjaga tim tetap produktif, dengan jadwal fleksibel dan prioritas boarding.',
  },
];

const directors = [
  {
    name: 'Tigin Sawala',
    role: 'Direktur Utama',
    image: '/branding/directors/direktur-utama.png',
    code: 'CEO',
    focus: 'Menjaga arah perusahaan tetap tajam: rute yang masuk akal, layanan yang konsisten, dan operasi yang bisa dipercaya.',
  },
  {
    name: 'Alif Rizki Ananta Harahap',
    role: 'Komisaris',
    image: '/branding/directors/komisaris.png',
    code: 'BOC',
    focus: 'Mengawasi keputusan besar perusahaan agar pertumbuhan tetap sehat, patuh, dan tidak asal mengejar ekspansi.',
  },
  {
    name: 'Nandang Eka Prasetya',
    role: 'Chief Finance & Investment Officer',
    image: '/branding/directors/cfio.png',
    code: 'CFIO',
    focus: 'Mengatur investasi armada, efisiensi modal, dan ruang tumbuh perusahaan dengan hitungan yang disiplin.',
  },
  {
    name: 'Tegar Putera Enggal Aperista',
    role: 'Direktur Pemasaran',
    image: '/branding/directors/direktur-pemasaran.png',
    code: 'CMO',
    focus: 'Membuat Supra Airways mudah diingat: dari cerita brand, kampanye rute, sampai pengalaman pelanggan.',
  },
  {
    name: 'Muhamad Ilham Terguhriyadi',
    role: 'Direktur Relasi dan Manajemen Bisnis',
    image: '/branding/directors/direktur-relasi-bisnis.png',
    code: 'CBD',
    focus: 'Membuka kerja sama dengan institusi, partner travel, dan klien korporat yang butuh layanan stabil.',
  },
  {
    name: 'Muhamad Rafli Septian',
    role: 'Direktur Kesehatan Awak dan Maskapai',
    image: '/branding/directors/direktur-kesehatan-awak.png',
    code: 'HSE',
    focus: 'Menjaga kru tetap siap bertugas, sehat, dan bekerja dalam budaya keselamatan yang tidak bisa ditawar.',
  },
];

const roleTags = {
  CEO: ['Strategi rute', 'Operasi', 'Kepemimpinan'],
  BOC: ['Tata kelola', 'Kepatuhan', 'Pengawasan'],
  CFIO: ['Keuangan', 'Investasi armada', 'Efisiensi modal'],
  CMO: ['Brand', 'Kampanye rute', 'Pengalaman pelanggan'],
  CBD: ['Kemitraan', 'Klien korporat', 'Pengembangan bisnis'],
  HSE: ['Keselamatan', 'Kesehatan awak', 'Budaya kerja'],
};

const faqs = [
  {
    q: 'Berapa banyak bagasi yang bisa saya bawa?',
    a: 'Kelas Business mendapat 40 kg, Premium Economy 30 kg, dan Economy 20 kg bagasi terdaftar, plus satu tas kabin.',
  },
  {
    q: 'Kapan saya bisa check-in online?',
    a: 'Check-in online dibuka 48 jam sebelum keberangkatan dan ditutup 2 jam sebelum jadwal terbang.',
  },
  {
    q: 'Bisakah saya mengubah jadwal penerbangan?',
    a: 'Tiket fleksibel bisa diubah tanpa biaya. Untuk tarif lain, Anda hanya membayar selisih tarifnya.',
  },
  {
    q: 'Bagaimana cara mengumpulkan SupraMiles?',
    a: 'Gabung SupraMiles gratis, lalu masukkan nomor keanggotaan saat memesan. Mil masuk otomatis setelah Anda terbang.',
  },
  {
    q: 'Apakah tersedia makanan di dalam pesawat?',
    a: 'Semua penerbangan menyediakan hidangan hangat. Menu khusus juga bisa dipesan saat pemesanan tiket.',
  },
];

function imageFallback(event) {
  event.currentTarget.style.display = 'none';
  event.currentTarget.parentElement?.classList.add('mediaMissing');
}

function FlightBoard() {
  return (
    <aside className="flightBoard" aria-label="Layar keberangkatan">
      <div className="boardTop">
        <div>
          <span>Hari ini dari Jakarta (CGK)</span>
          <strong>Keberangkatan</strong>
        </div>
        <Plane size={34} strokeWidth={1.9} aria-hidden="true" />
      </div>
      <div className="boardTable">
        {routes.map((route) => (
          <div className="boardRow" key={route.join('-')}>
            {route.map((item, index) => (
              <span
                key={item}
                className={index === 1 ? 'destination' : index === 4 ? 'status' : undefined}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function Landing() {
  const [lead, ...roster] = directors;

  return (
    <>
      <section className="hero" id="home">
        <div className="heroMedia">
          <img src={assets.lounge} alt="Lounge premium Supra Airways dengan meja resepsionis berlogo" />
          <div className="heroShade" />
          <FlightBoard />
        </div>
        <div className="heroCopy" data-animate="hero">
          <p className="eyebrow">Redefining premium travel</p>
          <h1>Terbang bukan sekadar sampai.</h1>
          <p>
            Dari lounge yang tenang hingga kabin yang lapang, setiap detail Supra Airways dirancang
            untuk Anda yang tahu bedanya.
          </p>
          <div className="heroActions">
            <Link className="primaryButton btn btn-warning" to="/flights">
              Pesan penerbangan
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a className="textButton btn btn-ghost" href="#showcase">
              Lihat pengalamannya
            </a>
          </div>
        </div>
      </section>

      <section className="metricsWrap" aria-label="Angka Supra Airways">
        {metrics.map(([value, label]) => (
          <article className="metric" key={value} data-animate="rise">
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="promoBand" data-animate="rise">
        <div className="promoInner">
          <span className="promoTag">
            <Ticket size={16} strokeWidth={2.3} aria-hidden="true" />
            Promo terbatas
          </span>
          <div className="promoText">
            <strong>Terbang ke Asia, hemat sampai 20%.</strong>
            <span>Pakai kode <b>SUPRA20</b> untuk keberangkatan sebelum akhir tahun.</span>
          </div>
          <Link className="btn btn-warning promoCta" to="/flights">
            Lihat penerbangan
            <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section destinationsSection" id="destinations" data-animate="section">
        <div className="sectionIntro">
          <div>
            <p className="eyebrow">Destinasi unggulan</p>
            <h2>Dunia menanti. Pilih arah Anda.</h2>
          </div>
          <p>
            Tarif pulang tanpa biaya tersembunyi, dari kota-kota favorit penumpang kami. Harga per
            orang untuk kelas Economy, sudah termasuk pajak.
          </p>
        </div>
        <div className="destinationGrid">
          {featuredDestinations.map((dest) => (
            <Link
              className="destinationCard"
              key={dest.code}
              to="/flights"
              data-animate="image"
            >
              <img
                src={destinationImage(dest.seed, 640, 800)}
                alt={`${dest.city}, ${dest.country}`}
                loading="lazy"
                onError={imageFallback}
              />
              <div className="destinationBody">
                <span className="destinationMeta">
                  {dest.country} · {dest.duration}
                </span>
                <h3>{dest.city}</h3>
                <div className="destinationFare">
                  <span>Mulai dari</span>
                  <strong>{formatIDR(dest.price)}</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience" data-animate="section">
        <div className="sectionIntro">
          <div>
            <p className="eyebrow">Pengalaman Supra</p>
            <h2>Mulus dari pintu masuk sampai pintu pesawat.</h2>
          </div>
          <p>
            Perjalanan yang baik dimulai jauh sebelum lepas landas. Kami rapikan setiap langkah,
            dari check-in sampai boarding, supaya Anda bisa fokus pada tujuan, bukan pada antrean.
          </p>
        </div>
        <div className="experienceGrid">
          <article className="experienceFeature" data-animate="image">
            <img src={assets.checkin} alt="Konter check-in dan layar keberangkatan Supra Airways" />
            <div>
              <span>Gate 10</span>
              <strong>Boarding yang terasa tenang sejak layar pertama</strong>
            </div>
          </article>
          <div className="serviceStack">
            {serviceLines.map((item) => (
              <article className="serviceLine" key={item.title} data-animate="rise">
                <div className="serviceIcon">
                  <item.icon size={18} strokeWidth={2.3} aria-hidden="true" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section brandSection" id="brand" data-animate="section">
        <div className="brandPanel">
          <div className="brandLogoCard" data-animate="image">
            <img src={assets.logoFull} alt="Logo lengkap Supra Airways" />
          </div>
          <div className="brandCopy">
            <p className="eyebrow">Identitas Supra</p>
            <h2>Satu sayap emas. Sebuah janji untuk terbang lebih baik.</h2>
            <p>
              Wing mark kami bukan sekadar hiasan. Ia hadir di ekor pesawat, di seragam kru, sampai
              di boarding pass Anda, sebagai tanda bahwa Anda sedang berada di tangan yang tepat.
            </p>
            <ul>
              {[
                'Emas untuk kehangatan layanan dan kenyamanan kelas atas',
                'Merah untuk energi dan semangat yang membawa Anda maju',
                'Navy untuk ketenangan dan kepercayaan di setiap penerbangan',
              ].map((item) => (
                <li key={item} data-animate="rise">
                  <CheckCircle2 size={18} strokeWidth={2.4} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section showcase" id="showcase" data-animate="section">
        <div className="sectionIntro compact">
          <p className="eyebrow">Di dalam Supra</p>
          <h2>Kenyamanan yang sudah terasa sebelum lepas landas.</h2>
        </div>
        <div className="showcaseTrack">
          {showcases.map((item, index) => (
            <article className={`showcaseItem item${index + 1}`} key={item.title} data-animate="image">
              <img src={item.image} alt={item.title} onError={imageFallback} />
              <div>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="loyaltyBand" id="supramiles" data-animate="section">
        <div className="loyaltyCopy">
          <p className="eyebrow">SupraMiles</p>
          <h2>Setiap penerbangan membawa Anda lebih jauh.</h2>
          <p>
            Kumpulkan mil di setiap perjalanan dan tukarkan dengan tiket, upgrade kabin, atau akses
            lounge. Gratis bergabung, seumur hidup.
          </p>
          <Link className="primaryButton btn btn-warning" to="/flights">
            Gabung SupraMiles
            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
        <div className="loyaltyTiers">
          {[
            { tier: 'Silver', perk: 'Prioritas check-in dan bagasi 30 kg' },
            { tier: 'Gold', perk: 'Akses lounge dan boarding prioritas' },
            { tier: 'Platinum', perk: 'Upgrade otomatis dan jaminan kursi' },
          ].map((row) => (
            <article className="loyaltyTier" key={row.tier} data-animate="rise">
              <Sparkles size={18} strokeWidth={2.2} aria-hidden="true" />
              <div>
                <strong>{row.tier}</strong>
                <span>{row.perk}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section directors" id="directors">
        <div className="directorsHero" data-animate="section">
          <div>
            <p className="eyebrow">Di balik setiap penerbangan</p>
            <h2>Tim yang menjaga janji Supra Airways.</h2>
            <p>
              Di balik rute yang mulus dan kabin yang nyaman, ada orang-orang yang memegang bagian
              penting dari maskapai ini: strategi, keuangan, pasar, relasi bisnis, dan keselamatan awak.
            </p>
            <div className="directorBadges">
              <span className="badge badge-outline">6 profil eksekutif</span>
              <span className="badge badge-warning">PT Supra Airways Tbk</span>
              <span className="badge badge-ghost">Tata kelola perusahaan</span>
            </div>
          </div>
          <img src={assets.boardGroup} alt="Jajaran direksi Supra Airways dalam ruang rapat" />
        </div>
        <div className="leadershipDeck">
          <article className="directorLead card" data-animate="image">
            <figure className="directorLeadMedia">
              <img src={lead.image} alt={`${lead.name}, ${lead.role}`} onError={imageFallback} />
            </figure>
            <div className="directorLeadCopy card-body">
              <div className="directorKicker">
                <span className="badge badge-warning">{lead.code}</span>
                <span>{lead.role}</span>
              </div>
              <h3 className="card-title">{lead.name}</h3>
              <p>{lead.focus}</p>
              <div className="directorTags onDark">
                {(roleTags[lead.code] || []).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="directorSignal">
                <strong>Satu arah, satu standar</strong>
                <span>Rute, layanan, dan keselamatan berjalan dalam satu visi yang sama.</span>
              </div>
            </div>
          </article>
          <div className="directorRoster">
            {roster.map((person, index) => (
              <article className="directorCard card" key={person.role} data-animate="rise">
                <div className="directorImage">
                  <img src={person.image} alt={`${person.name}, ${person.role}`} onError={imageFallback} />
                  <span className="directorCode">{person.code}</span>
                </div>
                <div className="directorInfo card-body">
                  <span className="directorRole">{person.role}</span>
                  <h3 className="card-title">{person.name}</h3>
                  <p>{person.focus}</p>
                  <div className="directorTags">
                    {(roleTags[person.code] || []).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="directorMeta">
                    <span>{String(index + 2).padStart(2, '0')}</span>
                    <span>Dewan direksi Supra Airways</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faqSection" id="faq" data-animate="section">
        <div className="sectionIntro">
          <div>
            <p className="eyebrow">Pertanyaan umum</p>
            <h2>Hal yang sering ditanyakan sebelum terbang.</h2>
          </div>
          <p>
            Masih ada yang ingin ditanyakan? Tim layanan penumpang kami siap 24 jam melalui pusat
            bantuan Supra Airways.
          </p>
        </div>
        <div className="faqList">
          {faqs.map((item) => (
            <details className="faqItem" key={item.q}>
              <summary>
                {item.q}
                <span className="faqMark" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section booking" id="booking" data-animate="section">
        <div className="bookingCopy">
          <p className="eyebrow">Pesan sekarang</p>
          <h2>Ke mana Supra membawa Anda hari ini?</h2>
          <p>
            Pilih tujuan, lihat jadwal, dan amankan kursi Anda. Dari perjalanan bisnis singkat sampai
            liburan lintas benua, satu maskapai untuk semuanya.
          </p>
          <div className="bookingNotes">
            <span>
              <Coffee size={17} strokeWidth={2.4} aria-hidden="true" />
              Akses lounge prioritas
            </span>
            <span>
              <Wifi size={17} strokeWidth={2.4} aria-hidden="true" />
              Wifi di seluruh kabin
            </span>
            <span>
              <ShieldCheck size={17} strokeWidth={2.4} aria-hidden="true" />
              Ubah jadwal tanpa ribet
            </span>
          </div>
        </div>
        <SearchForm />
      </section>
    </>
  );
}
