import { Link } from '@tanstack/react-router';
import { MapPin } from 'lucide-react';

export function SiteHeader() {
  return <header className="site-header site-width">
    <Link to="/" className="brand" aria-label="Wanli Consultancy LLC home">
      <span className="brand-name">Wanli Consultancy<span className="text-sm"> LLC</span></span>
      <span className="brand-detail">Lifestyle coaching</span>
    </Link>
    <span className="header-location"><MapPin size={13} /> Seattle, WA</span>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer site-width">
    <p>© {new Date().getFullYear()} Wanli Consultancy LLC</p>
    <nav className="footer-links" aria-label="Legal">
      <Link to="/terms">Terms and Conditions</Link>
      <Link to="/privacy">Privacy Policy</Link>
    </nav>
  </footer>;
}