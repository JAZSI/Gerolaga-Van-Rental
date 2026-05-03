import {
  faDollarSign,
  faLocationDot,
  faShieldHalved,
  faSnowflake,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/sections/Why.scss";

const WHY_ITEMS = [
  {
    title: 'Strong Air Conditioning',
    desc: 'Stay cool and comfortable no matter how long the trip.',
    icon: faSnowflake,
  },
  {
    title: 'Affordable Rates',
    desc: "Premium service that doesn't break the budget.",
    icon: faDollarSign,
  },
  {
    title: 'Vaccinated Driver',
    desc: 'Your safety is our priority, fully vaccinated and responsible.',
    icon: faShieldHalved,
  },
  {
    title: 'Sanitized Van',
    desc: 'Cleaned and sanitized before every trip for your peace of mind.',
    icon: faStar,
  },
  {
    title: 'Cavite to All of Luzon',
    desc: 'We travel anywhere in Luzon, no destination too far.',
    icon: faLocationDot,
  },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="fade-up">
        <div className="section-tag">Why Choose Us</div>
        <h2 className="section-title">Travel with confidence,<br/>travel with us.</h2>
      </div>

      <div className="why-container fade-up">
        <div className="why-content">
          <div className="why-grid">
            {WHY_ITEMS.map(({ title, desc, icon: Icon }) => (
              <div className="why-card" key={title}>
                <div className="why-head">
                  <div className="why-icon" aria-hidden="true">
                    <FontAwesomeIcon icon={Icon} />
                  </div>
                  <div className="why-name">{title}</div>
                </div>
                <div className="why-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-grid">
            <div className="gallery-item tall">
              <div className="gallery-ph gallery-ph--1">
                <img src="/images/1.jpg" alt="Van Exterior" />
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-ph gallery-ph--2">
                <img src="/images/2.jpg" alt="Interior" />
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-ph gallery-ph--3">
                <img src="/images/3.jpg" alt="Destination" />
              </div>
            </div>
            <div className="gallery-item wide">
              <div className="gallery-ph gallery-ph--4">
                <img src="/images/4.jpg" alt="Group Trip" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
