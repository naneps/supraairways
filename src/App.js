import React from 'react';

const h = React.createElement;

const stats = [
  ['125+', 'Armada siap terbang'],
  ['42', 'Destinasi utama'],
  ['97%', 'On-time performance'],
  ['24/7', 'Customer care'],
];

const services = [
  {
    title: 'Premium Passenger Experience',
    desc: 'Dari check-in hingga boarding, pengalaman penumpang dirancang rapi, nyaman, dan terasa profesional.',
  },
  {
    title: 'Executive & Corporate Travel',
    desc: 'Layanan perjalanan bisnis, jalur prioritas, dan executive lounge untuk kebutuhan korporasi.',
  },
  {
    title: 'Operational Reliability',
    desc: 'Maskapai dibangun dengan fokus pada keselamatan, maintenance armada, dan kesiapan operasional.',
  },
  {
    title: 'Brand Expansion',
    desc: 'Identitas brand siap diterapkan pada terminal, kantor, boardroom, lounge, dan platform digital.',
  },
];

const logoVariants = [
  {
    title: 'Primary Logo / Label Version',
    path: '/branding/supra-logo-full.png',
    fallback: '/logos/supra-logo-wordmark.svg',
    note: 'Versi utama yang memuat nama Supra Airways dan PT Supra Airways Tbk. Cocok untuk header website, company profile, signage, dan materi resmi.',
  },
  {
    title: 'Icon Only Version',
    path: '/branding/supra-logo-icon.png',
    fallback: '/logos/supra-logo-emblem.svg',
    note: 'Versi icon-only untuk favicon, avatar aplikasi, boarding pass, social avatar, patch seragam, dan identitas visual ringkas.',
  },
];

const touchpoints = [
  {
    title: 'Reception Branding',
    desc: 'Simulasi penerapan identitas visual pada meja resepsionis dan dinding kantor agar first impression terasa premium.',
    bullets: ['Front desk signage', 'Back wall identity', 'Lighting + premium ambience'],
  },
  {
    title: 'Airport Check-in & Departure',
    desc: 'Penerapan logo pada area keberangkatan, check-in counter, dan signage terminal untuk memperkuat konsistensi brand.',
    bullets: ['Departure signage', 'Counter branding', 'Wayfinding consistency'],
  },
  {
    title: 'Boardroom & Corporate Room',
    desc: 'Brand feel yang tetap kuat ketika diterapkan pada ruang rapat direksi, ruang presentasi, dan area bisnis.',
    bullets: ['Boardroom wall branding', 'Investor presentation setting', 'Executive meeting environment'],
  },
  {
    title: 'Executive Lounge',
    desc: 'Visualisasi suasana lounge maskapai yang nyaman, hangat, dan berkelas untuk penumpang bisnis maupun partner perusahaan.',
    bullets: ['Premium lounge mood', 'Warm hospitality tone', 'Corporate premium touch'],
  },
];

const routes = ['Jakarta', 'Bali', 'Makassar', 'Surabaya', 'Singapore', 'Tokyo', 'Kuala Lumpur', 'Sydney'];

const leaders = [
  ['Komisaris', 'Pengawasan strategis, tata kelola, dan penguatan arah perusahaan.'],
  ['Direktur Utama', 'Arah pertumbuhan bisnis, ekspansi rute, dan kualitas layanan.'],
  ['Direktur Pemasaran', 'Brand, customer engagement, dan pertumbuhan pasar.'],
  ['Chief Finance & Investment Officer', 'Keuangan korporat, investasi, dan penguatan modal.'],
  ['Direktur Kesehatan Awak dan Maskapai', 'Kesiapan kru, keselamatan, dan standar kesehatan operasional.'],
  ['Direktur Relasi dan Manajemen Bisnis', 'Kemitraan strategis, relasi institusi, dan peluang bisnis.'],
];

const fallbackImage = (src) => (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = src;
};

function Header() {
  return h('header', { className: 'nav' },
    h('a', { href: '#home', className: 'brand' },
      h('img', {
        src: '/branding/supra-logo-icon.png',
        alt: 'Supra Airways icon logo',
        onError: fallbackImage('/logos/supra-logo-emblem.svg'),
      }),
      h('span', null, 'Supra Airways')
    ),
    h('nav', null,
      h('a', { href: '#about' }, 'Tentang'),
      h('a', { href: '#identity' }, 'Logo'),
      h('a', { href: '#showcase' }, 'Touchpoints'),
      h('a', { href: '#leadership' }, 'Direksi')
    ),
    h('a', { href: '#booking', className: 'navCta' }, 'Explore Brand')
  );
}

function Hero() {
  return h('section', { id: 'home', className: 'hero section' },
    h('div', { className: 'heroContent' },
      h('p', { className: 'eyebrow' }, 'PT Supra Airways Tbk'),
      h('h1', null, 'Landing page premium untuk maskapai yang tampil modern, elegan, dan siap dikembangkan.'),
      h('p', { className: 'heroText' }, 'Konten landing page ini sudah diarahkan untuk menampilkan identitas brand Supra Airways secara lebih proper, termasuk versi logo dengan label, versi icon-only, serta area showcase penerapan brand di ruang kantor, terminal, boardroom, dan executive lounge.'),
      h('div', { className: 'heroActions' },
        h('a', { className: 'primaryBtn', href: '#identity' }, 'Lihat Logo System'),
        h('a', { className: 'secondaryBtn', href: '#showcase' }, 'Lihat Brand Touchpoints')
      )
    ),
    h('div', { className: 'heroDisplay' },
      h('div', { className: 'heroDisplayCard' },
        h('img', {
          src: '/branding/supra-logo-full.png',
          alt: 'Supra Airways full logo',
          onError: fallbackImage('/logos/supra-logo-wordmark.svg'),
        }),
        h('div', { className: 'heroDisplayMeta' },
          h('span', null, 'Brand colors'),
          h('strong', null, 'Navy • Gold • Red Accent')
        )
      )
    )
  );
}

function Stats() {
  return h('section', { className: 'stats sectionCompact' }, stats.map((item) =>
    h('article', { key: item[0], className: 'statCard' },
      h('strong', null, item[0]),
      h('span', null, item[1])
    )
  ));
}

function About() {
  return h('section', { id: 'about', className: 'section splitSection' },
    h('div', { className: 'sectionCopy' },
      h('p', { className: 'eyebrow' }, 'Brand Direction'),
      h('h2', null, 'Dibuat agar identitas maskapai terasa premium di setiap titik interaksi.'),
      h('p', null, 'Struktur halaman ini menempatkan Supra Airways sebagai corporate airline brand yang kuat secara visual dan siap dikembangkan ke fitur lanjutan seperti booking, investor relations, jadwal penerbangan, loyalty program, dan company profile digital.'),
      h('div', { className: 'routeWrap' }, routes.map((route) => h('span', { key: route }, route)))
    ),
    h('div', { className: 'serviceGrid' },
      services.map((item) =>
        h('article', { key: item.title },
          h('h3', null, item.title),
          h('p', null, item.desc)
        )
      )
    )
  );
}

function Identity() {
  return h('section', { id: 'identity', className: 'section identitySection' },
    h('p', { className: 'eyebrow' }, 'Brand Identity'),
    h('h2', null, 'Versi logo dengan label dan icon-only'),
    h('p', { className: 'sectionLead' }, 'Bagian ini sudah disiapkan untuk menampilkan beberapa versi logo Supra Airways. Struktur asset PNG sudah diarahkan ke folder public/branding supaya gampang diganti atau ditambah nanti.'),
    h('div', { className: 'logoGridEnhanced' }, logoVariants.map((item) =>
      h('article', { key: item.title, className: 'logoCardEnhanced' },
        h('div', { className: 'logoPreview' },
          h('img', {
            src: item.path,
            alt: item.title,
            onError: fallbackImage(item.fallback),
          })
        ),
        h('div', { className: 'logoCopy' },
          h('h3', null, item.title),
          h('p', null, item.note)
        )
      )
    ))
  );
}

function Showcase() {
  return h('section', { id: 'showcase', className: 'section showcaseSection' },
    h('p', { className: 'eyebrow' }, 'Application Showcase'),
    h('h2', null, 'Konten landing page untuk area penerapan brand'),
    h('p', { className: 'sectionLead' }, 'Semua poin di bawah ini merepresentasikan materi yang tadi diminta untuk dimasukkan ke landing page: reception area, airport touchpoint, boardroom, dan executive lounge.'),
    h('div', { className: 'touchpointGrid' }, touchpoints.map((item, index) =>
      h('article', { key: item.title, className: 'touchpointCard' },
        h('div', { className: `touchpointVisual tone${(index % 4) + 1}` },
          h('span', { className: 'touchpointBadge' }, 'Supra Airways'),
          h('strong', null, item.title)
        ),
        h('div', { className: 'touchpointCopy' },
          h('h3', null, item.title),
          h('p', null, item.desc),
          h('ul', null, item.bullets.map((bullet) => h('li', { key: bullet }, bullet)))
        )
      )
    ))
  );
}

function Leadership() {
  return h('section', { id: 'leadership', className: 'section leadershipSection' },
    h('p', { className: 'eyebrow' }, 'Leadership Structure'),
    h('h2', null, 'Struktur eksekutif PT Supra Airways Tbk'),
    h('div', { className: 'leaderGrid' }, leaders.map((item) =>
      h('article', { key: item[0] },
        h('h3', null, item[0]),
        h('p', null, item[1])
      )
    ))
  );
}

function Booking() {
  return h('section', { id: 'booking', className: 'section booking' },
    h('div', { className: 'bookingCopy' },
      h('p', { className: 'eyebrow' }, 'Ready to Extend'),
      h('h2', null, 'Landing page ini sudah proper untuk jadi base website maskapai.'),
      h('p', null, 'Selanjutnya halaman ini bisa dikembangkan menjadi portal booking, informasi armada, layanan corporate travel, investor relations, serta company profile PT Supra Airways Tbk.'),
      h('div', { className: 'assetHint' },
        h('strong', null, 'Folder asset PNG yang disiapkan:'),
        h('code', null, 'public/branding/')
      )
    ),
    h('form', null,
      h('label', null, 'Origin', h('input', { placeholder: 'Jakarta' })),
      h('label', null, 'Destination', h('input', { placeholder: 'Tokyo' })),
      h('label', null, 'Departure Date', h('input', { type: 'date' })),
      h('label', null, 'Passenger Type', h('input', { placeholder: 'Business / Economy' })),
      h('button', { type: 'button' }, 'Search Flight Demo')
    )
  );
}

export default function App() {
  return h(React.Fragment, null,
    h(Header),
    h('main', null,
      h(Hero),
      h(Stats),
      h(About),
      h(Identity),
      h(Showcase),
      h(Leadership),
      h(Booking)
    ),
    h('footer', null,
      h('div', null,
        h('strong', null, 'PT Supra Airways Tbk'),
        h('span', null, 'Legendaris di Udara — premium airline brand concept')
      ),
      h('img', {
        src: '/branding/supra-logo-icon.png',
        alt: 'Supra Airways icon',
        onError: fallbackImage('/logos/supra-logo-emblem.svg'),
      })
    )
  );
}
