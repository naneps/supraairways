import React from 'react';

const h = React.createElement;

const logo = {
  full: '/branding/supra-logo-full.png',
  icon: '/branding/supra-logo-icon.png',
  fullFallback: '/logos/supra-logo-wordmark.svg',
  iconFallback: '/logos/supra-logo-emblem.svg',
};

const stats = [
  ['125+', 'Armada siap terbang'],
  ['42', 'Destinasi utama'],
  ['97%', 'On-time performance'],
  ['24/7', 'Customer care'],
];

const services = [
  ['Premium Lounge', 'Pengalaman lounge dengan ambience navy, gold, warm light, dan identitas brand yang konsisten.'],
  ['Boarding Gate', 'Area keberangkatan dibuat rapi untuk memperkuat trust, direction, dan pengalaman premium.'],
  ['Flight Information', 'Informasi rute, jadwal, dan layanan korporat disiapkan dalam visual yang modern.'],
  ['Executive Travel', 'Layanan bisnis untuk partner perusahaan, jajaran direksi, dan customer prioritas.'],
];

const showcases = [
  {
    title: 'Executive Lounge Reception',
    image: '/branding/showcase-lounge.png',
    desc: 'Logo Supra Airways tampil sebagai signage utama di area lounge premium dengan material gold dan navy.',
  },
  {
    title: 'Boardroom Direksi',
    image: '/branding/showcase-boardroom.png',
    desc: 'Ruang meeting korporat untuk jajaran direksi, presentasi investor, dan keputusan strategis perusahaan.',
  },
  {
    title: 'Corporate Frontdesk',
    image: '/branding/showcase-reception.png',
    desc: 'Tampilan frontdesk yang clean, mewah, dan cocok untuk kantor pusat PT Supra Airways Tbk.',
  },
];

const directors = [
  {
    name: 'Komisaris',
    role: 'Komisaris',
    image: '/branding/directors/komisaris.png',
    desc: 'Pengawasan strategis, tata kelola perusahaan, dan arah jangka panjang PT Supra Airways Tbk.',
  },
  {
    name: 'Direktur Utama',
    role: 'Direktur Utama',
    image: '/branding/directors/direktur-utama.png',
    desc: 'Memimpin arah bisnis, ekspansi rute, standar layanan, dan performa operasional maskapai.',
  },
  {
    name: 'Chief Finance & Investment Officer',
    role: 'Chief Finance & Investment Officer',
    image: '/branding/directors/cfio.png',
    desc: 'Mengelola strategi keuangan, investasi, efisiensi modal, dan pertumbuhan nilai perusahaan.',
  },
  {
    name: 'Direktur Pemasaran',
    role: 'Direktur Pemasaran',
    image: '/branding/directors/direktur-pemasaran.png',
    desc: 'Membangun brand, campaign, customer growth, loyalty, dan positioning Supra Airways.',
  },
  {
    name: 'Direktur Relasi dan Manajemen Bisnis',
    role: 'Direktur Relasi dan Manajemen Bisnis',
    image: '/branding/directors/direktur-relasi-bisnis.png',
    desc: 'Menjalin kemitraan, relasi institusi, dan kerja sama bisnis strategis.',
  },
  {
    name: 'Direktur Kesehatan Awak dan Maskapai',
    role: 'Direktur Kesehatan Awak dan Maskapai',
    image: '/branding/directors/direktur-kesehatan-awak.png',
    desc: 'Mengawal kesiapan awak, kesehatan kru, safety culture, dan standar operasional maskapai.',
  },
];

const routes = ['Jakarta', 'Bali', 'Makassar', 'Surabaya', 'Singapore', 'Tokyo', 'Kuala Lumpur', 'Sydney'];

function fallbackImage(src) {
  return (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = src;
  };
}

function hideBrokenImage(event) {
  event.currentTarget.style.display = 'none';
  event.currentTarget.parentElement?.classList.add('isMissing');
}

function Header() {
  return h('header', { className: 'nav' },
    h('a', { href: '#home', className: 'brand' },
      h('img', { src: logo.icon, alt: 'Supra Airways icon', onError: fallbackImage(logo.iconFallback) }),
      h('span', null, 'Supra Airways')
    ),
    h('nav', null,
      h('a', { href: '#identity' }, 'Logo'),
      h('a', { href: '#experience' }, 'Experience'),
      h('a', { href: '#showcase' }, 'Showcase'),
      h('a', { href: '#directors' }, 'Direksi')
    ),
    h('a', { href: '#booking', className: 'navCta' }, 'Book Flight')
  );
}

function Hero() {
  return h('section', { id: 'home', className: 'hero section' },
    h('div', { className: 'heroCopy' },
      h('p', { className: 'eyebrow' }, 'PT Supra Airways Tbk'),
      h('h1', null, 'Redefining Premium Travel.'),
      h('p', { className: 'heroText' }, 'Landing page resmi Supra Airways dengan identitas visual gold wing, red accent, navy interior, executive lounge, dan jajaran direksi perusahaan.'),
      h('div', { className: 'heroActions' },
        h('a', { className: 'primaryBtn', href: '#showcase' }, 'Lihat Brand Showcase'),
        h('a', { className: 'secondaryBtn', href: '#directors' }, 'Jajaran Direksi')
      )
    ),
    h('div', { className: 'heroCard' },
      h('div', { className: 'heroLogoPanel' },
        h('img', { src: logo.full, alt: 'Supra Airways full logo', onError: fallbackImage(logo.fullFallback) })
      ),
      h('div', { className: 'heroRouteCard' },
        h('span', null, 'Premium Lounge'),
        h('strong', null, 'Navy • Gold • Red Accent')
      )
    )
  );
}

function Stats() {
  return h('section', { className: 'stats sectionCompact' }, stats.map((item) =>
    h('article', { className: 'statCard', key: item[0] }, h('strong', null, item[0]), h('span', null, item[1]))
  ));
}

function Identity() {
  return h('section', { id: 'identity', className: 'section identity' },
    h('p', { className: 'eyebrow' }, 'Brand Identity'),
    h('h2', null, 'Logo dipakai sebagai icon web dan logo brand utama.'),
    h('p', { className: 'sectionLead' }, 'Background putih pada aset logo disiapkan untuk dihapus pada file PNG final. Halaman ini memakai logo full untuk brand, dan icon-only untuk favicon, navbar, serta brand mark kecil.'),
    h('div', { className: 'logoGrid' },
      h('article', { className: 'logoCard logoCardFull' },
        h('img', { src: logo.full, alt: 'Supra Airways full logo', onError: fallbackImage(logo.fullFallback) }),
        h('h3', null, 'Logo dengan label'),
        h('p', null, 'Untuk hero, signage, company profile, proposal investor, dan official brand placement.')
      ),
      h('article', { className: 'logoCard logoCardIcon' },
        h('img', { src: logo.icon, alt: 'Supra Airways icon only', onError: fallbackImage(logo.iconFallback) }),
        h('h3', null, 'Icon-only'),
        h('p', null, 'Untuk favicon, app icon, badge, boarding pass, tail mark, dan social media avatar.')
      )
    )
  );
}

function Experience() {
  return h('section', { id: 'experience', className: 'section experience' },
    h('div', { className: 'sectionSplit' },
      h('div', null,
        h('p', { className: 'eyebrow' }, 'Passenger Experience'),
        h('h2', null, 'Dari lounge, boarding gate, sampai flight information.'),
        h('p', { className: 'sectionLead' }, 'Konsep landing page dibuat mengikuti arahan visual: premium lounge, corporate airport feel, dan layanan maskapai yang terasa matang.')
      ),
      h('div', { className: 'serviceGrid' }, services.map((item) =>
        h('article', { key: item[0] }, h('h3', null, item[0]), h('p', null, item[1]))
      ))
    ),
    h('div', { className: 'routeWrap' }, routes.map((route) => h('span', { key: route }, route)))
  );
}

function Showcase() {
  return h('section', { id: 'showcase', className: 'section showcase' },
    h('p', { className: 'eyebrow' }, 'Brand Application'),
    h('h2', null, 'Konten visual untuk landing page.'),
    h('p', { className: 'sectionLead' }, 'Visual lounge, boardroom, dan reception dipakai sebagai konten utama supaya website terasa seperti brand maskapai beneran, bukan sekadar template.'),
    h('div', { className: 'showcaseGrid' }, showcases.map((item) =>
      h('article', { className: 'showcaseCard', key: item.title },
        h('div', { className: 'imageShell' },
          h('img', { src: item.image, alt: item.title, onError: hideBrokenImage }),
          h('span', null, 'Supra Airways')
        ),
        h('div', { className: 'showcaseBody' }, h('h3', null, item.title), h('p', null, item.desc))
      )
    ))
  );
}

function Directors() {
  return h('section', { id: 'directors', className: 'section directors' },
    h('p', { className: 'eyebrow' }, 'Board of Directors'),
    h('h2', null, 'Jajaran direksi PT Supra Airways Tbk'),
    h('p', { className: 'sectionLead' }, 'Profil eksekutif ditampilkan sebagai bagian konten landing page agar brand terasa punya struktur perusahaan yang jelas dan profesional.'),
    h('div', { className: 'directorGrid' }, directors.map((person) =>
      h('article', { className: 'directorCard', key: person.role },
        h('div', { className: 'directorPhoto' },
          h('img', { src: person.image, alt: person.role, onError: hideBrokenImage }),
          h('span', null, person.role.slice(0, 2).toUpperCase())
        ),
        h('div', { className: 'directorBody' },
          h('small', null, person.name),
          h('h3', null, person.role),
          h('p', null, person.desc)
        )
      )
    ))
  );
}

function Booking() {
  return h('section', { id: 'booking', className: 'section booking' },
    h('div', null,
      h('p', { className: 'eyebrow' }, 'Plan Your Flight'),
      h('h2', null, 'Siap terbang bersama Supra Airways?'),
      h('p', null, 'Landing page ini siap dikembangkan ke fitur booking, jadwal penerbangan, loyalty program, dan investor relations.')
    ),
    h('form', null,
      h('label', null, 'Origin', h('input', { placeholder: 'Jakarta' })),
      h('label', null, 'Destination', h('input', { placeholder: 'Tokyo' })),
      h('label', null, 'Departure Date', h('input', { type: 'date' })),
      h('label', null, 'Class', h('input', { placeholder: 'Business / Economy' })),
      h('button', { type: 'button' }, 'Search Flight Demo')
    )
  );
}

export default function App() {
  React.useEffect(() => {
    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = logo.icon;
    document.head.appendChild(link);
  }, []);

  return h(React.Fragment, null,
    h(Header),
    h('main', null, h(Hero), h(Stats), h(Identity), h(Experience), h(Showcase), h(Directors), h(Booking)),
    h('footer', null,
      h('div', null, h('strong', null, 'PT Supra Airways Tbk'), h('span', null, 'Redefining Premium Travel')), 
      h('img', { src: logo.icon, alt: 'Supra Airways icon', onError: fallbackImage(logo.iconFallback) })
    )
  );
}
