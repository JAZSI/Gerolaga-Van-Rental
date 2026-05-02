import React from 'react';
import "../styles/sections/Services.scss";
import { Users, Calendar, Globe, Briefcase, Plane, ArrowUpRight } from 'lucide-react';

const SERVICES: { Icon: React.ComponentType<any>; title: string; desc: string }[] = [
  { Icon: Users, title: 'Company Outings', desc: 'Team building trips and corporate outings, stress-free.' },
  { Icon: Users, title: 'Family Reunions', desc: 'Group outings for families and friends, any occasion.' },
  { Icon: Calendar, title: 'Events & Seminars', desc: 'Reliable transport to and from any event or seminar.' },
  { Icon: Globe, title: 'Out-of-Town Tours', desc: 'Explore beautiful destinations across Luzon comfortably.' },
  { Icon: Briefcase, title: 'Business Tours', desc: 'Professional transport for business trips and site visits.' },
  { Icon: Plane, title: 'Port Service', desc: 'Airport and seaport transfers done on time, every time.' },
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
              <ArrowUpRight size={18} />
            </div>
            <div className="service-icon">
              <Icon size={20} />
            </div>
            <div className="service-name">{title}</div>
            <div className="service-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
