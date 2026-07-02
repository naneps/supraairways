import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../lib/data.js';

export default function SiteFooter() {
  return (
    <footer>
      <div>
        <img src={assets.logoIcon} alt="Wing mark Supra Airways" />
        <div>
          <strong>PT Supra Airways Tbk</strong>
          <span>Redefining premium travel</span>
        </div>
      </div>
      <nav aria-label="Navigasi footer">
        <Link to="/about">Tentang</Link>
        <Link to="/investor">Investor</Link>
        <Link to="/flights">Penerbangan</Link>
        <a href="https://travel.supraairways.space" target="_blank" rel="noreferrer">
          Supra Travel
        </a>
      </nav>
    </footer>
  );
}
