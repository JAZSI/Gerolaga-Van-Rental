import { useState } from 'react';
import "../styles/sections/Contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faFacebookMessenger, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { sendViaMessenger, sendViaWhatsApp, getFormData } from '../services/messenger';

type ContactChannel = 'messenger' | 'whatsapp';

const CONTACTS = [
  {
    label: 'Dito Network',
    value: '0994-507-7836',
    href: 'tel:+639945077836',
    icon: faPhone,
  },
  {
    label: 'Smart Network',
    value: '0947-795-3961',
    href: 'tel:+639477953961',
    icon: faPhone,
  },
  {
    label: 'Facebook',
    value: 'Gerolaga Van Rental',
    href: 'https://www.facebook.com/profile.php?id=61577497282138',
    icon: faFacebookF,
    external: true,
  },
  {
    label: 'TikTok',
    value: 'G Adventures',
    href: 'https://www.tiktok.com/@g.adventuresss',
    icon: faTiktok,
    external: true,
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (channel: ContactChannel) => {
    const formData = getFormData();

    if (!formData.date || !formData.pickupLocation || !formData.dropoffLocation) {
      setMessage('Please fill in Date, Pick-up, and Drop-off locations.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (channel === 'whatsapp') {
        sendViaWhatsApp(formData);
      } else {
        sendViaMessenger(formData);
      }

      (document.querySelector('.contact-form') as HTMLFormElement)?.reset();

      setMessage(channel === 'whatsapp' ? 'Opening WhatsApp...' : 'Opening Messenger...');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error sending inquiry. Please try again.');
      console.error('Messenger error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend('messenger');
  };
  return (
    <section className="contact" id="contact">
      <div className="fade-up">
        <div className="section-tag">Get in Touch</div>
        <h2 className="section-title">Ready to book?<br/>Let's talk.</h2>
      </div>

      <div className="contact-inner">
        <div className="fade-up">
          <div className="contact-list">
            {CONTACTS.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                className="contact-item"
                href={href}
                {...(external && { target: '_blank', rel: 'noreferrer' })}
              >
                <div className="num-icon"><FontAwesomeIcon icon={Icon} /></div>
                <div>
                  <span className="num-label">{label}</span>
                  <span className="num-val">{value}</span>
                </div>
              </a>
            ))}
          </div>
          <p className="contact-disclaimer">Available via call, text, or Messenger anytime.</p>
        </div>

        <form className="contact-form fade-up" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pickup-date">Date / Days</label>
            <input type="date" id="pickup-date" required />
          </div>
          <div>
            <label htmlFor="pickup-time">Departure Time</label>
            <input type="time" id="pickup-time" />
          </div>
          <div>
            <label htmlFor="pickup-loc">Pick-up Location</label>
            <input type="text" id="pickup-loc" placeholder="e.g. General Trias, Cavite" required />
          </div>
          <div>
            <label htmlFor="dropoff-loc">Drop-off Location</label>
            <input type="text" id="dropoff-loc" placeholder="e.g. Tagaytay, Batangas" required />
          </div>
          <div className="full">
            <label htmlFor="persons">Number of Persons</label>
            <select id="persons">
              <option value="">Select number of passengers</option>
              <option>1 – 4 persons</option>
              <option>5 – 8 persons</option>
              <option>9 – 12 persons</option>
              <option>13 – 14 persons</option>
            </select>
          </div>
          <div className="full">
            <label htmlFor="notes">Additional Notes</label>
            <textarea id="notes" placeholder="Type of trip, special requests, etc."></textarea>
          </div>
          {message && <div className="form-message">{message}</div>}
          <div className="contact-actions full">
            <button className="form-submit messenger" type="submit" disabled={isSubmitting}>
              <FontAwesomeIcon icon={faFacebookMessenger} />
              {isSubmitting ? 'Sending...' : 'Messenger'}
            </button>
            <button
              className="form-submit whatsapp"
              type="button"
              onClick={() => handleSend('whatsapp')}
              disabled={isSubmitting}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
