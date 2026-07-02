import React from 'react';

const h = React.createElement;

const logos = [
  {
    name: 'Wingmark Classic',
    file: '/logos/supra-logo-wingmark.svg',
    note: 'logo elegan untuk corporate signage dan dokumen resmi',
  },
  {
    name: 'Skyline Emblem',
    file: '/logos/supra-logo-emblem.svg',
    note: 'cocok untuk favicon, patch seragam, dan aplikasi mobile',
  },
  {
    name: 'Supra Wordmark',
    file: '/logos/supra-logo-wordmark.svg',
    note: 'brand utama untuk banner besar dan livery pesawat',
  },
  {
    name: 'Tailfin Mark',
    file: '/logos/supra-logo-tailfin.svg',
    note: 'ikon dinamis untuk ekor pesawat dan boarding pass',
  },
];

const routes = ['Jakarta', 'Bali', 'Makassar', 'Tokyo', 'Singapore', 'Kuala Lumpur'];

const stats = [
  ['125+', 'Armada siap terbang'],
  ['42', 'Kota tujuan'],
  ['97%', 'Ketepatan layanan'],
  ['24/7', 'Customer care'],
];

const leaders = [
  ['Komisaris', 'Pengawasan strategis dan tata kelola perusahaan'],
  ['Direktur Utama', 'Arah bisnis, ekspansi rute, dan kualitas layanan'],
  ['Direktur Pemasaran', 'Brand, loyalitas pelanggan, dan pertumbuhan pasar'],
  ['Chief Finance & Investment Officer', 'Keuangan, investasi, dan penguatan modal'],
  ['Direktur Kesehatan Awak dan Maskapai', 'Kesehatan kru, keselamatan, dan kesiapan operasional'],
  ['Direktur Relasi dan Manajemen Bisnis', 'Kemitraan, relasi institusi, dan peluang korporasi'],
];

function Header() {
  return h('header', { className: 'nav' },
    h('a', { href: '#home', className: 'brand' },
      h('img', { src: '/logos/supra-logo-wingmark.svg', alt: 'Supra Airways logo' }),
      h('span', null, 'Supra Airways')
    ),
    h('nav', null,
      h('a', { href: '#services' }, 'Layanan'),
      h('a', { href: '#fleet' }, 'Armada'),
      h('a', { href: '#leadership' }, 'Direksi'),
      h('a', { href: '#logos' }, 'Logo')
    ),
    h('a', { href: '#booking', className: 'navCta' }, 'Book Flight')
  );
}

function Hero() {
  return h('section', { id: 'home', className: 'hero section' },
    h('div', { className: 'heroContent' },
      h('p', { className: 'eyebrow' }, 'PT Supra Airways Tbk'),
      h('h1', null, 'Legendaris di Udara, Nyaman di Setiap Rute.'),
      h('p', { className: 'heroText' }, 'Supra Airways menghadirkan pengalaman perjalanan udara premium dengan standar keselamatan modern, layanan hangat, dan jaringan rute yang terus berkembang.'),
      h('div', { className: 'heroActions' },
        h('a', { className: 'primaryBtn', href: '#booking' }, 'Cari Penerbangan'),
        h('a', { className: 'secondaryBtn', href: '#logos' }, 'Lihat Brand Logo')
      )
    ),
    h('div', { className: 'heroCard' },
      h('div', { className: 'planeBadge' }, 'SPX 125'),
      h('div', { className: 'planeWindow' },
        h('img', { src: '/logos/supra-logo-tailfin.svg', alt: 'Supra Airways tail icon' })
      ),
      h('div', { className: 'flightPanel' },
        h('div', null, h('small', null, 'From'), h('strong', null, 'Jakarta')),
        h('div', null, h('small', null, 'To'), h('strong', null, 'Tokyo')),
        h('div', null, h('small', null, 'Status'), h('strong', null, 'On Time'))
      )
    )
  );
}

function Stats() {
  return h('section', { className: 'stats' }, stats.map((item) =>
    h('div', { className: 'statCard', key: item[0] }, h('strong', null, item[0]), h('span', null, item[1]))
  ));
}

function Services() {
  return h('section', { id: 'services', className: 'section split' },
    h('div', null,
      h('p', { className: 'eyebrow' }, 'Corporate Airline'),
      h('h2', null, 'Terbang dengan standar pelayanan yang dibuat rapi dari darat sampai udara.'),
      h('p', null, 'Kami membangun ekosistem perjalanan yang nyaman untuk penumpang reguler, perjalanan bisnis, charter korporat, hingga layanan prioritas executive lounge.')
    ),
    h('div', { className: 'serviceGrid' },
      h('article', null, h('h3', null, 'Priority Flight'), h('p', null, 'Check-in cepat, boarding terarah, dan layanan kru profesional.')),
      h('article', null, h('h3', null, 'Executive Lounge'), h('p', null, 'Ruang tunggu premium untuk mitra bisnis dan pelanggan prioritas.')),
      h('article', null, h('h3', null, 'Fleet Care'), h('p', null, 'Pemeliharaan armada berbasis inspeksi rutin dan standar keselamatan.')),
      h('article', null, h('h3', null, 'Cargo & Partner'), h('p', null, 'Solusi pengiriman dan kolaborasi rute untuk kebutuhan perusahaan.'))
    )
  );
}

function Fleet() {
  return h('section', { id: 'fleet', className: 'section fleet' },
    h('div', null,
      h('p', { className: 'eyebrow' }, 'Supra Fleet'),
      h('h2', null, 'Livery ikonik, kabin nyaman, dan operasional tangguh.'),
      h('p', null, 'Identitas visual Supra Airways menggabungkan warna navy, gold, dan red accent agar terlihat premium di terminal, livery pesawat, sampai aplikasi digital.')
    ),
    h('div', { className: 'routeWrap' }, routes.map((route) => h('span', { key: route }, route)))
  );
}

function Leadership() {
  return h('section', { id: 'leadership', className: 'section' },
    h('p', { className: 'eyebrow' }, 'Leadership Board'),
    h('h2', null, 'Tim eksekutif PT Supra Airways Tbk'),
    h('div', { className: 'leaderGrid' }, leaders.map((item) =>
      h('article', { key: item[0] }, h('h3', null, item[0]), h('p', null, item[1]))
    ))
  );
}

function LogoShowcase() {
  return h('section', { id: 'logos', className: 'section logos' },
    h('p', { className: 'eyebrow' }, 'Brand Identity'),
    h('h2', null, 'Beberapa opsi logo Supra Airways'),
    h('div', { className: 'logoGrid' }, logos.map((logo) =>
      h('article', { key: logo.name },
        h('img', { src: logo.file, alt: logo.name }),
        h('h3', null, logo.name),
        h('p', null, logo.note)
      )
    ))
  );
}

function Booking() {
  return h('section', { id: 'booking', className: 'section booking' },
    h('div', null,
      h('p', { className: 'eyebrow' }, 'Plan Your Flight'),
      h('h2', null, 'Siap terbang bersama Supra Airways?'),
      h('p', null, 'Landing page ini sudah disiapkan untuk dikembangkan menjadi portal pemesanan, loyalty program, dan halaman investor relations.')
    ),
    h('form', null,
      h('label', null, 'Asal', h('input', { placeholder: 'Jakarta' })),
      h('label', null, 'Tujuan', h('input', { placeholder: 'Bali' })),
      h('label', null, 'Tanggal', h('input', { type: 'date' })),
      h('button', { type: 'button' }, 'Cari Jadwal')
    )
  );
}

export default function App() {
  return h(React.Fragment, null,
    h(Header),
    h('main', null,
      h(Hero),
      h(Stats),
      h(Services),
      h(Fleet),
      h(Leadership),
      h(LogoShowcase),
      h(Booking)
    ),
    h('footer', null,
      h('strong', null, 'PT Supra Airways Tbk'),
      h('span', null, 'Legendaris di Udara — Born to Fly Since 1997')
    )
  );
}
