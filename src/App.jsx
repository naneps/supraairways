import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BookingProvider } from './lib/store.jsx';
import { useReveal } from './lib/useReveal.js';
import { assets } from './lib/data.js';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Landing from './pages/Landing.jsx';
import Flights from './pages/Flights.jsx';
import Book from './pages/Book.jsx';
import Confirmation from './pages/Confirmation.jsx';
import Boarding from './pages/Boarding.jsx';
import Manage from './pages/Manage.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
}

function Shell() {
  const location = useLocation();
  useReveal(location.pathname);
  const isLanding = location.pathname === '/';

  return (
    <>
      <a className="skipLink" href="#main">Lewati ke konten</a>
      <SiteHeader />
      <main id="main" className={isLanding ? undefined : 'appMain'}>
        <div className="pageFade" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/book" element={<Book />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/boarding" element={<Boarding />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default function App() {
  React.useEffect(() => {
    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = assets.logoIcon;
    document.head.appendChild(link);
  }, []);

  return (
    <BookingProvider>
      <BrowserRouter>
        <ScrollManager />
        <Shell />
      </BrowserRouter>
    </BookingProvider>
  );
}
