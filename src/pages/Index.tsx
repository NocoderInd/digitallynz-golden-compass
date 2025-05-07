
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LeadCapture from '../components/LeadCapture';

const Index = () => {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  useEffect(() => {
    // Track user exit intent for lead capture
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowLeadCapture(true);
      }
    };

    // Add exit intent detection
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      {showLeadCapture && <LeadCapture />}
    </div>
  );
};

export default Index;
