import "../styles/sections/Hero.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-eyebrow">Van for Rent with Driver</div>
        <h1>
          Gerolaga's
          <br />
          <em>Van Rental</em>
        </h1>
        <p className="hero-sub">Comfortable, affordable, and reliable Hiace Commuter trips from General Trias &amp; Imus, Cavite to anywhere in Luzon.</p>

        <div className="hero-actions">
          <a className="btn-primary" href="#contact">Book a Trip</a>
          <a className="btn-ghost" href="#contact">
            <FontAwesomeIcon icon={faPhone} />
            Call Us
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <span className="stat-num">15</span>
            <span className="stat-label">Seat Capacity</span>
          </div>
          <div>
            <span className="stat-num">Luzon</span>
            <span className="stat-label">Coverage</span>
          </div>
          <div>
            <span className="stat-num">24/7</span>
            <span className="stat-label">Available</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-img-wrap">
          <div className="hero-img-placeholder">
            <img src="/images/hero.jpg" alt="Van Photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
