import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import OurApproachSection from './components/OurApproachSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <OurApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;