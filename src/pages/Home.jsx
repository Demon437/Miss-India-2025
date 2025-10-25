import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import UpcomingEvents from '../components/UpcomingEvents';
import About from './About';
import Highlight from './Highlight';
import GovernmentCultural from '../components/GovernmentCultural';
import CSREducational from '../components/CSREducational';
import Philosophy from '../components/Philosophy';
import Partnership from '../components/Partnership';
import Contact from '../components/Contact';
import GotoForm from './GotoForm';
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ecruWhite-500 via-oldGold-200 to-ecruWhite-500 text-celtic-500">
      <Header />
      <HeroBanner />
      <div id="about">
        <About />
      </div>
      <div id="highlight">
        <Highlight />
      </div>

      {/* Additional Sections */}
      <section id="services" className="py-16 bg-[#F5F5DC] w-full">
        <div className="w-full">
          <GovernmentCultural />
          <CSREducational />
          <Philosophy />
          <Partnership />
          <GotoForm />
        </div>
      </section>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
