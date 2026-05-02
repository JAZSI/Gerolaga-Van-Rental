import { useState } from "react";
import "../styles/components/Navbar.scss";

type NavItem = {
  id: string;
  label: string;
};

export default function Navbar({
  navItems,
  scrolled,
}: {
  navItems: NavItem[];
  scrolled: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar--scrolled" : "navbar--transparent"
      }`}
    >
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src="/logo.svg" alt="Gerolaga's Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">
            Gerolaga's <span>· Van Rental</span>
          </span>
        </a>

        <nav className="navbar-nav">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar-cta">
          Book Now
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="navbar-menu-btn"
        >
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-menu-inner">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="navbar-cta-mobile"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}