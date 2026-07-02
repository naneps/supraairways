import React from 'react';
import { Link } from 'react-router-dom';
import {
  Plane,
  Bus,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Compass,
  Target,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import { assets } from '../lib/data.js';

const stats = [
  ['2', 'lini bisnis terintegrasi: udara dan darat'],
  ['42', 'destinasi domestik dan internasional'],
  ['3', 'koridor utama travel di Jawa Barat'],
  ['1', 'perjalanan mulus, tanpa putus'],
];

const missions = [
  'Menghadirkan konektivitas udara dan darat yang mulus, tanpa putus.',
  'Menjunjung standar keselamatan dan pelayanan kelas internasional.',
  'Memperkuat akses ekonomi daerah lewat jaringan hingga ke pelosok.',
  'Tumbuh secara sehat dan bertanggung jawab bersama mitra dan masyarakat.',
];

const values = [
  { icon: ShieldCheck, title: 'Aman', text: 'Keselamatan adalah standar yang tidak bisa ditawar di setiap moda perjalanan.' },
  { icon: Sparkles, title: 'Nyaman', text: 'Kenyamanan penumpang kami rancang sejak dari darat sampai tiba di tujuan.' },
  { icon: HeartHandshake, title: 'Tepercaya', text: 'Tepat waktu, transparan, dan konsisten menjaga janji di setiap perjalanan.' },
  { icon: Compass, title: 'Terintegrasi', text: 'Satu ekosistem yang menghubungkan udara dan darat dalam satu tiket perjalanan.' },
];

const corridors = [
  { name: 'Ciayumajakuning', cities: 'Cirebon, Indramayu, Majalengka, Kuningan' },
  { name: 'Bandung Raya', cities: 'Kota Bandung dan wilayah sekitarnya' },
  { name: 'Priangan Timur', cities: 'Garut, Tasikmalaya, Ciamis, Banjar, Pangandaran' },
];

export default function About() {
  return (
    <div className="appPage">
      <div className="appContainer aboutWrap">
        <header className="aboutHero" data-animate="rise">
          <div>
            <p className="eyebrow">Tentang kami</p>
            <h1>Menghubungkan Indonesia, dari udara sampai ke pelosok.</h1>
            <p className="aboutLead">
              Supra Airways adalah perusahaan penyedia layanan transportasi dan perjalanan
              terintegrasi yang menghubungkan masyarakat, bisnis, dan destinasi impian. Kami
              memadukan keunggulan armada maskapai penerbangan dengan fleksibilitas layanan
              transportasi darat, menghadirkan solusi mobilitas menyeluruh dari rute global,
              domestik, hingga pelosok daerah.
            </p>
          </div>
          <figure className="aboutHeroMedia">
            <img src={assets.reception} alt="Resepsi korporat Supra Airways" />
          </figure>
        </header>

        <section className="aboutStats" aria-label="Ringkasan perusahaan">
          {stats.map(([value, label]) => (
            <article key={label} data-animate="rise">
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section className="aboutVM" data-animate="section">
          <article className="vmCard vision">
            <span className="vmIcon">
              <Target size={20} strokeWidth={2.2} aria-hidden="true" />
            </span>
            <h2>Visi</h2>
            <p>
              Menjadi penyedia solusi mobilitas terintegrasi terdepan di Indonesia yang
              menghubungkan setiap orang dengan tujuannya secara aman, nyaman, dan tepercaya.
            </p>
          </article>
          <article className="vmCard mission">
            <span className="vmIcon">
              <Compass size={20} strokeWidth={2.2} aria-hidden="true" />
            </span>
            <h2>Misi</h2>
            <ul>
              {missions.map((m) => (
                <li key={m}>
                  <CheckCircle2 size={17} strokeWidth={2.4} aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="aboutBiz" data-animate="section">
          <div className="sectionIntro compact">
            <p className="eyebrow">Lini bisnis</p>
            <h2>Dua lini, satu ekosistem perjalanan.</h2>
          </div>

          <article className="bizDetail">
            <div className="bizDetailHead">
              <span className="bizIcon">
                <Plane size={22} strokeWidth={2.1} aria-hidden="true" />
              </span>
              <div>
                <span className="bizKicker">Airlines Division</span>
                <h3>Maskapai penerbangan</h3>
              </div>
            </div>
            <p>
              Lini udara Supra Airways melayani mobilitas tinggi masyarakat dengan standar
              keselamatan internasional tertinggi.
            </p>
            <div className="bizSplit">
              <div>
                <strong>Penerbangan domestik</strong>
                <span>Menghubungkan kota besar dan pusat pertumbuhan ekonomi di seluruh kepulauan Indonesia secara efisien.</span>
              </div>
              <div>
                <strong>Penerbangan internasional</strong>
                <span>Membuka akses dari Indonesia ke destinasi strategis di Asia dan global, mendukung pariwisata dan bisnis lintas negara.</span>
              </div>
            </div>
          </article>

          <article className="bizDetail">
            <div className="bizDetailHead">
              <span className="bizIcon">
                <Bus size={22} strokeWidth={2.1} aria-hidden="true" />
              </span>
              <div>
                <span className="bizKicker">Travel &amp; Shuttle Division</span>
                <h3>Travel &amp; shuttle eksekutif</h3>
              </div>
            </div>
            <p>
              Lini darat kami memperkuat konektivitas regional di Jawa Barat dengan armada shuttle
              eksekutif modern, dirancang terintegrasi menuju bandara terdekat untuk perjalanan
              antarmoda tanpa putus.
            </p>
            <div className="corridorList">
              {corridors.map((c) => (
                <div className="corridorItem" key={c.name}>
                  <MapPin size={16} strokeWidth={2.3} aria-hidden="true" />
                  <div>
                    <strong>{c.name}</strong>
                    <span>{c.cities}</span>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="btn btn-warning bizExtBtn"
              href="https://travel.supraairways.space"
              target="_blank"
              rel="noreferrer"
            >
              Kunjungi Supra Travel
              <ExternalLink size={16} strokeWidth={2.4} aria-hidden="true" />
            </a>
          </article>
        </section>

        <section className="aboutValues" data-animate="section">
          <div className="sectionIntro compact">
            <p className="eyebrow">Nilai kami</p>
            <h2>Empat hal yang kami pegang di setiap perjalanan.</h2>
          </div>
          <div className="valueGrid">
            {values.map((v) => (
              <article className="valueCard" key={v.title} data-animate="rise">
                <span className="valueIcon">
                  <v.icon size={20} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="aboutCta" data-animate="rise">
          <div>
            <h2>Siap terbang, atau menyusuri Jawa Barat bersama kami?</h2>
            <p>Satu ekosistem perjalanan, dari kabin pesawat sampai kursi shuttle eksekutif.</p>
          </div>
          <div className="aboutCtaActions">
            <Link className="btn btn-warning" to="/flights">
              Cari penerbangan
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link className="btn btn-ghost" to="/#directors">Kenali direksi kami</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
