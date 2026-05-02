import "../styles/sections/Footer.scss";

const FOOTER_NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <span className="f-logo">Gerolaga's</span>
          <span className="f-tagline">Van Rental</span>
          <span className="f-desc">Premium van rental with professional drivers serving Cavite to all of Luzon.</span>
        </div>

        <div className="footer-section footer-nav">
          <h4 className="footer-title">Navigation</h4>
          <nav className="footer-links">
            {FOOTER_NAV.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span className="f-copyright">© {year} Gerolaga's Van Rental. All rights reserved.</span>
        <span className="f-tagline-sm">Van for Rent with Driver · Cavite to Luzon</span>
      </div>
    </footer>
  );
}
