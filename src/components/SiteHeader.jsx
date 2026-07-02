import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { assets } from '../lib/data.js';

const links = [
  ['Beranda', '/'],
  ['Tentang', '/about'],
  ['Penerbangan', '/flights'],
  ['Investor', '/investor'],
  ['Check-in', '/manage'],
];

export default function SiteHeader() {
  const location = useLocation();

  return (
    <header className="siteHeader">
      <Link className="brandMark" to="/" aria-label="Supra Airways beranda">
        <img src={assets.logoIcon} alt="Logo sayap Supra Airways" />
        <span>Supra Airways</span>
      </Link>
      <nav aria-label="Navigasi utama">
        {links.map(([label, to]) =>
          to.includes('#') ? (
            <a key={to} href={to}>
              {label}
            </a>
          ) : (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive && location.pathname === to ? 'is-current' : undefined
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ),
        )}
      </nav>
      <Link className="headerAction btn btn-warning" to="/flights">
        Pesan penerbangan
        <ChevronRight size={17} strokeWidth={2.4} aria-hidden="true" />
      </Link>
    </header>
  );
}
