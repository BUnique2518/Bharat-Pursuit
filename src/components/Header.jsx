import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export function MobileMenu({ isOpen, onClose }) {
  const closeAndScroll = () => {
    onClose();
    window.scrollTo({ top: 0 });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    onClose();
    window.dispatchEvent(new Event('openBookingModal'));
  };

  const activeStyle = { color: 'var(--secondary)' };

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <nav className="mobile-menu-content" onClick={e => e.stopPropagation()}>
        <NavLink to="/about" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
        <NavLink to="/tech" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>Tech</NavLink>
        <NavLink to="/case-studies" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>Case Studies</NavLink>
        <NavLink to="/careers" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>Careers</NavLink>
        <NavLink to="/blogs" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>Blog</NavLink>
        <div style={{ marginTop: '20px' }}>
          <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleBooking}>Book a Strategy Call</a>
        </div>
      </nav>
    </div>
  );
}

export default function Header({ theme, toggleTheme, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navigate = useNavigate();

  const goHome = (e, targetId) => {
    e.preventDefault();
    navigate('/');
    setIsMobileMenuOpen(false);
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const closeAndScroll = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  const activeStyle = { color: 'var(--secondary)' };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#" className="brand" onClick={(e) => goHome(e)}>
          <img src="/assets/light-mode.png" alt="Bharat Pursuit logo" className="brand-logo" />
          <div>
            <div className="brand-top">Pursue Growth. Build Bharat.</div>
            <div className="brand-name">Bharat Pursuit</div>
          </div>
        </a>

        <nav className="main-nav">
          <NavLink to="/about" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
          <NavLink to="/tech" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>Tech</NavLink>
          <NavLink to="/case-studies" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>Case Studies</NavLink>
          <NavLink to="/blogs" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>Blog</NavLink>
          <NavLink to="/careers" onClick={closeAndScroll} style={({ isActive }) => isActive ? activeStyle : undefined}>Careers</NavLink>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={toggleTheme} className="btn-icon" aria-label="Toggle Theme" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: 0, color: 'var(--primary)' }}>
            <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>

          <div className="desktop-only">
            <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openBookingModal')); }}>Book a Strategy Call</a>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: 4, color: 'var(--primary)' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
