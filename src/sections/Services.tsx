import "../styles/sections/Services.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faCalendarDays, faGlobe, faBriefcase, faPlaneDeparture, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const SERVICES: { Icon: IconDefinition; title: string; desc: string }[] = [
  { Icon: faUsers, title: 'Company Outings', desc: 'Team building trips and corporate outings, stress-free.' },
  { Icon: faUsers, title: 'Family Reunions', desc: 'Group outings for families and friends, any occasion.' },
  { Icon: faCalendarDays, title: 'Events & Seminars', desc: 'Reliable transport to and from any event or seminar.' },
  { Icon: faGlobe, title: 'Out-of-Town Tours', desc: 'Explore beautiful destinations across Luzon comfortably.' },
  { Icon: faBriefcase, title: 'Business Tours', desc: 'Professional transport for business trips and site visits.' },
  { Icon: faPlaneDeparture, title: 'Port Service', desc: 'Airport and seaport transfers done on time, every time.' },
];

export default function Services() {
  return (
    <section id="services">
      <div className="fade-up">
        <div className="section-tag">What We Offer</div>
        <h2 className="section-title">Services</h2>
        <p className="section-sub">We cater to a wide range of group travel needs — from corporate outings to family trips and everything in between.</p>
      </div>

      <div className="services-grid fade-up">
        {SERVICES.map(({ Icon, title, desc }) => (
          <div className="service-card" key={title}>
            <div className="service-arrow">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
            <div className="service-icon">
              <FontAwesomeIcon icon={Icon} />
            </div>
            <div className="service-name">{title}</div>
            <div className="service-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
