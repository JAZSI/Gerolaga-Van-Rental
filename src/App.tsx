import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Why from './sections/Why';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why', label: 'Why' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar navItems={navItems} scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
