import "../styles/sections/About.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUsers, faLocationDot, faBolt, faClock } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="fade-up">
        <div className="section-tag">About Us</div>
        <h2 className="section-title">More than just a ride.<br/>A comfortable journey.</h2>
      </div>

      <div className="about-grid">
        <div className="about-img-wrap fade-up">
          <div className="about-img-ph">
            <img src="/images/about.jpg" alt="Hiace Commuter" />
          </div>
        </div>

        <div className="about-text-content fade-up">
          <p className="about-intro">
            Gerolaga's Van Rental is a trusted transport service based in Cavite, offering comfortable and dependable van rental with a professional driver.
          </p>
          <div className="about-details">
            <div className="detail-pill">
              <div className="detail-icon">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <div>
                <span className="detail-text">Toyota Hiace Commuter</span>
                <span className="detail-sub">Well-maintained, air-conditioned van</span>
              </div>
            </div>

            <div className="detail-pill">
              <div className="detail-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div>
                <span className="detail-text">15-Seater Capacity</span>
                <span className="detail-sub">14 passengers + 1 driver</span>
              </div>
            </div>

            <div className="detail-pill">
              <div className="detail-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <span className="detail-text">General Trias / Imus, Cavite</span>
                <span className="detail-sub">Our base location</span>
              </div>
            </div>

            <div className="detail-pill">
              <div className="detail-icon">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <div>
                <span className="detail-text">Premium Comfort</span>
                <span className="detail-sub">Strong A/C, sanitized, maintained</span>
              </div>
            </div>

            <div className="detail-pill">
              <div className="detail-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div>
                <span className="detail-text">24/7 Availability</span>
                <span className="detail-sub">Available anytime you need us</span>
              </div>
            </div>

            <div className="detail-pill">
              <div className="detail-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div>
                <span className="detail-text">Professional Drivers</span>
                <span className="detail-sub">Experienced and fully vaccinated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
