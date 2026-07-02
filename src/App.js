import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Plane,
  Sparkles,
  UsersRound,
} from 'lucide-react';

const h = React.createElement;

const assets = {
  logoFull: '/branding/supra-logo-full.png',
  logoIcon: '/branding/supra-logo-icon.png',
  lounge: '/branding/showcase-lounge.png',
  boardroom: '/branding/showcase-boardroom.png',
  checkin: '/branding/showcase-checkin.png',
  reception: '/branding/showcase-reception.png',
  boardGroup: '/branding/directors/board-group.png',
};

const routes = [
  ['08:30', 'Singapore', 'SA 215', '12', 'On time'],
  ['09:45', 'Kuala Lumpur', 'SA 817', '10', 'On time'],
  ['11:20', 'Hong Kong', 'SA 703', '11', 'Boarding'],
  ['13:10', 'Tokyo (NRT)', 'SA 625', '09', 'On time'],
  ['15:40', 'Sydney', 'SA 247', '08', 'On time'],
];

const metrics = [
  ['42', 'rute regional dan internasional'],
  ['97.4%', 'ketepatan keberangkatan'],
  ['18', 'premium lounge partner'],
  ['24/7', 'care desk untuk penumpang prioritas'],
];

const serviceLines = [
  {
    icon: Plane,
    title: 'Premium cabin journey',
    text: 'Alur berangkat dibuat singkat: check-in prioritas, signage jelas, lounge tenang, dan boarding yang mudah dipahami.',
  },
  {
    icon: Clock3,
    title: 'Real-time operations',
    text: 'Informasi gate, status, dan rute diposisikan seperti flight board bandara supaya pengunjung langsung menangkap skala bisnisnya.',
  },
  {
    icon: BadgeCheck,
    title: 'Corporate assurance',
    text: 'Visual kantor, boardroom, dan direksi memperkuat kesan perusahaan publik yang punya tata kelola dan standar layanan.',
  },
];

const showcases = [
  {
    label: 'Lounge',
    title: 'Premium lounge reception',
    image: assets.lounge,
    text: 'Signage gold wing dan panel navy menjadi titik pertama yang membangun rasa premium.',
  },
  {
    label: 'Departure',
    title: 'Check-in and flight board',
    image: assets.checkin,
    text: 'Area keberangkatan dibuat informatif, hangat, dan tegas untuk penumpang bisnis.',
  },
  {
    label: 'Boardroom',
    title: 'Ruang keputusan direksi',
    image: assets.boardroom,
    text: 'Boardroom menjadi konteks investor, governance, dan arah pertumbuhan maskapai.',
  },
];

const directors = [
  {
    name: 'Tigin Sawala',
    role: 'Direktur Utama',
    image: '/branding/directors/direktur-utama.png',
    code: 'CEO',
    focus: 'Arah bisnis, keselamatan layanan, ekspansi rute, dan performa operasional.',
  },
  {
    name: 'Alif Rizki Ananta Harahap',
    role: 'Komisaris',
    image: '/branding/directors/komisaris.png',
    code: 'BOC',
    focus: 'Pengawasan strategis, tata kelola, dan kepatuhan perusahaan.',
  },
  {
    name: 'Nandang Eka Prasetya',
    role: 'Chief Finance & Investment Officer',
    image: '/branding/directors/cfio.png',
    code: 'CFIO',
    focus: 'Struktur modal, investasi armada, dan efisiensi pertumbuhan.',
  },
  {
    name: 'Tegar Putera Enggal Aperista',
    role: 'Direktur Pemasaran',
    image: '/branding/directors/direktur-pemasaran.png',
    code: 'CMO',
    focus: 'Brand, loyalitas pelanggan, campaign rute, dan positioning pasar.',
  },
  {
    name: 'Muhamad Ilham Terguhriyadi',
    role: 'Direktur Relasi dan Manajemen Bisnis',
    image: '/branding/directors/direktur-relasi-bisnis.png',
    code: 'CBD',
    focus: 'Kemitraan institusi, layanan korporat, dan pengembangan kanal bisnis.',
  },
  {
    name: 'Muhamad Rafli Septian',
    role: 'Direktur Kesehatan Awak dan Maskapai',
    image: '/branding/directors/direktur-kesehatan-awak.png',
    code: 'HSE',
    focus: 'Kesiapan awak, kesehatan kru, safety culture, dan standar operasional.',
  },
];

function Icon({ icon }) {
  return h(icon, { size: 18, strokeWidth: 2.3, 'aria-hidden': true });
}

function imageFallback(event) {
  event.currentTarget.style.display = 'none';
  event.currentTarget.parentElement?.classList.add('mediaMissing');
}

function Header() {
  const nav = [
    ['Experience', '#experience'],
    ['Brand', '#brand'],
    ['Direksi', '#directors'],
    ['Flight', '#booking'],
  ];

  return h('header', { className: 'siteHeader' },
    h('a', { className: 'brandMark', href: '#home', 'aria-label': 'Supra Airways home' },
      h('img', { src: assets.logoIcon, alt: 'Supra Airways wing logo' }),
      h('span', null, 'Supra Airways')
    ),
    h('nav', { 'aria-label': 'Main navigation' },
      nav.map(([label, href]) => h('a', { key: href, href }, label))
    ),
    h('a', { className: 'headerAction btn btn-warning', href: '#booking' },
      'Book',
      h(ChevronRight, { size: 17, strokeWidth: 2.4, 'aria-hidden': true })
    )
  );
}

function FlightBoard() {
  return h('aside', { className: 'flightBoard', 'aria-label': 'Departure board' },
    h('div', { className: 'boardTop' },
      h('div', null,
        h('span', null, 'Keberangkatan'),
        h('strong', null, 'Departures')
      ),
      h(Plane, { size: 34, strokeWidth: 1.9, 'aria-hidden': true })
    ),
    h('div', { className: 'boardTable' },
      routes.map((route) => h('div', { className: 'boardRow', key: route.join('-') },
        route.map((item, index) => h('span', {
          key: item,
          className: index === 1 ? 'destination' : index === 4 ? 'status' : undefined,
        }, item))
      ))
    )
  );
}

function Hero() {
  return h('section', { className: 'hero', id: 'home' },
    h('div', { className: 'heroMedia' },
      h('img', { src: assets.lounge, alt: 'Supra Airways premium lounge with branded reception desk' }),
      h('div', { className: 'heroShade' }),
      h(FlightBoard)
    ),
    h('div', { className: 'heroCopy' },
      h('p', { className: 'eyebrow' }, 'PT Supra Airways Tbk'),
      h('h1', null, 'Premium air travel with a boardroom mindset.'),
      h('p', null, 'Supra Airways tampil sebagai maskapai premium dengan identitas gold wing, layanan bandara yang jelas, dan struktur direksi yang siap membawa brand ke rute berikutnya.'),
      h('div', { className: 'heroActions' },
        h('a', { className: 'primaryButton btn btn-warning', href: '#booking' },
          'Rencanakan penerbangan',
          h(ArrowRight, { size: 18, strokeWidth: 2.4, 'aria-hidden': true })
        ),
        h('a', { className: 'textButton btn btn-ghost', href: '#directors' }, 'Lihat jajaran direksi')
      )
    )
  );
}

function Metrics() {
  return h('section', { className: 'metricsWrap', 'aria-label': 'Supra Airways metrics' },
    metrics.map(([value, label]) => h('article', { className: 'metric', key: value },
      h('strong', null, value),
      h('span', null, label)
    ))
  );
}

function Experience() {
  return h('section', { className: 'section experience', id: 'experience' },
    h('div', { className: 'sectionIntro' },
      h('p', { className: 'eyebrow' }, 'Passenger flow'),
      h('h2', null, 'Website terasa seperti pintu masuk bandara, bukan brosur statis.'),
      h('p', null, 'Konten dibuat dari visual lounge, check-in, flight board, boardroom, dan direksi supaya pengunjung cepat paham: ini brand maskapai dengan operasi yang rapi.')
    ),
    h('div', { className: 'experienceGrid' },
      h('article', { className: 'experienceFeature' },
        h('img', { src: assets.checkin, alt: 'Supra Airways check-in counters and departure board' }),
        h('div', null,
          h('span', null, 'Gate 10'),
          h('strong', null, 'Business class boarding in progress')
        )
      ),
      h('div', { className: 'serviceStack' },
        serviceLines.map((item) => h('article', { className: 'serviceLine', key: item.title },
          h('div', { className: 'serviceIcon' }, h(Icon, { icon: item.icon })),
          h('div', null,
            h('h3', null, item.title),
            h('p', null, item.text)
          )
        ))
      )
    )
  );
}

function Brand() {
  return h('section', { className: 'section brandSection', id: 'brand' },
    h('div', { className: 'brandPanel' },
      h('div', { className: 'brandLogoCard' },
        h('img', { src: assets.logoFull, alt: 'Supra Airways full logo' })
      ),
      h('div', { className: 'brandCopy' },
        h('p', { className: 'eyebrow' }, 'Visual identity'),
        h('h2', null, 'Logo baru menjadi pusat navigasi visual.'),
        h('p', null, 'Wing mark dipakai di navbar, favicon, badge, dan footer. Wordmark penuh dipakai saat brand butuh tampil formal seperti signage, deck investor, dan halaman korporat.'),
        h('ul', null,
          ['Gold wing untuk rasa premium', 'Red accent sebagai penanda energi brand', 'Navy surface untuk kesan aviation executive'].map((item) =>
            h('li', { key: item }, h(CheckCircle2, { size: 18, strokeWidth: 2.4, 'aria-hidden': true }), item)
          )
        )
      )
    )
  );
}

function Showcase() {
  return h('section', { className: 'section showcase', id: 'showcase' },
    h('div', { className: 'sectionIntro compact' },
      h('p', { className: 'eyebrow' }, 'Brand application'),
      h('h2', null, 'Setiap gambar punya fungsi dalam cerita brand.'),
    ),
    h('div', { className: 'showcaseTrack' },
      showcases.map((item, index) => h('article', { className: `showcaseItem item${index + 1}`, key: item.title },
        h('img', { src: item.image, alt: item.title, onError: imageFallback }),
        h('div', null,
          h('span', null, item.label),
          h('h3', null, item.title),
          h('p', null, item.text)
        )
      ))
    )
  );
}

function Directors() {
  const [lead, ...roster] = directors;

  return h('section', { className: 'section directors', id: 'directors' },
    h('div', { className: 'directorsHero' },
      h('div', null,
        h('p', { className: 'eyebrow' }, 'Leadership'),
        h('h2', null, 'Jajaran direksi dibuat terasa seperti halaman korporat premium.'),
        h('p', null, 'Tidak cuma foto berjejer. Direktur utama tampil sebagai anchor, lalu jajaran lainnya disusun seperti leadership dossier yang cepat dibaca dan tetap terasa manusiawi.'),
        h('div', { className: 'directorBadges' },
          h('span', { className: 'badge badge-outline' }, '6 executive profiles'),
          h('span', { className: 'badge badge-warning' }, 'Public company ready'),
          h('span', { className: 'badge badge-ghost' }, 'Airport operations')
        )
      ),
      h('img', { src: assets.boardGroup, alt: 'Supra Airways board of directors in a meeting room' })
    ),
    h('div', { className: 'leadershipDeck' },
      h('article', { className: 'directorLead card' },
        h('figure', { className: 'directorLeadMedia' },
          h('img', { src: lead.image, alt: `${lead.name}, ${lead.role}`, onError: imageFallback })
        ),
        h('div', { className: 'directorLeadCopy card-body' },
          h('div', { className: 'directorKicker' },
            h('span', { className: 'badge badge-warning' }, lead.code),
            h('span', null, lead.role)
          ),
          h('h3', { className: 'card-title' }, lead.name),
          h('p', null, lead.focus),
          h('div', { className: 'directorSignal' },
            h('strong', null, 'Strategic command'),
            h('span', null, 'Rute, standar layanan, operasional, dan budaya keselamatan berada di bawah koordinasi utama.')
          )
        )
      ),
      h('div', { className: 'directorRoster' },
        roster.map((person, index) => h('article', { className: 'directorCard card', key: person.role },
          h('div', { className: 'directorImage' },
            h('img', { src: person.image, alt: `${person.name}, ${person.role}`, onError: imageFallback }),
            h('span', { className: 'directorCode' }, person.code)
          ),
          h('div', { className: 'directorInfo card-body' },
            h('span', { className: 'directorRole' }, person.role),
            h('h3', { className: 'card-title' }, person.name),
            h('p', null, person.focus),
            h('div', { className: 'directorMeta' },
              h('span', null, String(index + 2).padStart(2, '0')),
              h('span', null, 'Supra Airways leadership')
            )
          )
        ))
      )
    )
  );
}

function Booking() {
  return h('section', { className: 'section booking', id: 'booking' },
    h('div', { className: 'bookingCopy' },
      h('p', { className: 'eyebrow' }, 'Flight desk'),
      h('h2', null, 'Cari rute tanpa membuat halaman terasa berat.'),
      h('p', null, 'Panel ini bisa disambungkan ke booking engine, jadwal penerbangan, loyalty, atau investor relations saat fiturnya siap.'),
      h('div', { className: 'bookingNotes' },
        h('span', null, h(Sparkles, { size: 17, strokeWidth: 2.4, 'aria-hidden': true }), 'Priority lounge'),
        h('span', null, h(UsersRound, { size: 17, strokeWidth: 2.4, 'aria-hidden': true }), 'Corporate travel'),
        h('span', null, h(CalendarDays, { size: 17, strokeWidth: 2.4, 'aria-hidden': true }), 'Flexible schedule')
      )
    ),
    h('form', { className: 'bookingForm card' },
      h('label', null, 'Origin', h('input', { className: 'input input-bordered', defaultValue: 'Jakarta', 'aria-label': 'Origin' })),
      h('label', null, 'Destination', h('input', { className: 'input input-bordered', defaultValue: 'Tokyo (NRT)', 'aria-label': 'Destination' })),
      h('label', null, 'Departure', h('input', { className: 'input input-bordered', type: 'date', 'aria-label': 'Departure date' })),
      h('label', null, 'Cabin', h('select', { className: 'select select-bordered', defaultValue: 'Business', 'aria-label': 'Cabin class' },
        ['Business', 'Premium Economy', 'Economy'].map((item) => h('option', { key: item }, item))
      )),
      h('button', { className: 'btn btn-warning', type: 'button' },
        h(Plane, { size: 18, strokeWidth: 2.5, 'aria-hidden': true }),
        'Search flight demo'
      )
    )
  );
}

function Footer() {
  return h('footer', null,
    h('div', null,
      h('img', { src: assets.logoIcon, alt: 'Supra Airways wing mark' }),
      h('div', null,
        h('strong', null, 'PT Supra Airways Tbk'),
        h('span', null, 'Redefining Premium Travel')
      )
    ),
    h('nav', { 'aria-label': 'Footer navigation' },
      h('a', { href: '#experience' }, 'Experience'),
      h('a', { href: '#directors' }, 'Direksi'),
      h('a', { href: '#booking' }, 'Booking'),
      h('a', { href: '#home' }, 'Back to top')
    )
  );
}

export default function App() {
  React.useEffect(() => {
    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = assets.logoIcon;
    document.head.appendChild(link);
  }, []);

  return h(React.Fragment, null,
    h('a', { className: 'skipLink', href: '#home' }, 'Skip to content'),
    h(Header),
    h('main', null,
      h(Hero),
      h(Metrics),
      h(Experience),
      h(Brand),
      h(Showcase),
      h(Directors),
      h(Booking)
    ),
    h(Footer)
  );
}
