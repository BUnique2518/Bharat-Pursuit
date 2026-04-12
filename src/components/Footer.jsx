import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col-main">
            <div className="brand-name-footer" style={{ marginBottom: '4px' }}>Bharat Pursuit</div>
            <div style={{ color: '#fbbf24', fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Pursue Growth. Build Bharat.
            </div>
            <p className="footer-desc">
              Elite technology and strategy consultancy specializing in enterprise transformation, AI-driven innovation, cloud architecture, and precision go-to-market execution for ambitious enterprises worldwide.
            </p>
            <div className="footer-contact-info" style={{ marginTop: '20px' }}>
              <a href="mailto:support@bharatpursuit.com" className="footer-contact-item">
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>mail</span>
                support@bharatpursuit.com
              </a>
              <div className="footer-contact-item">
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>location_on</span>
                Global Strategic Headquarters: Kolkata, India
              </div>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/tech" onClick={scrollToTop}>Technology</Link></li>
              <li><Link to="/case-studies" onClick={scrollToTop}>Case Studies</Link></li>
              <li><Link to="/blogs" onClick={scrollToTop}>Blog</Link></li>
              <li><Link to="/careers" onClick={scrollToTop}>Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={scrollToTop}>Terms of Service</Link></li>
              <li><Link to="/cookies" onClick={scrollToTop}>Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© Bharat Pursuit. All rights reserved.</p>
          <div className="footer-social">
            <Link to="/" aria-label="Back to Top" className="footer-social-icon" style={{ display: 'flex' }} onClick={scrollToTop}>
              <span className="material-symbols-outlined">home</span>
            </Link>
            <a href="mailto:support@bharatpursuit.com" aria-label="Support Mail" className="footer-social-icon" style={{ display: 'flex' }}>
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
