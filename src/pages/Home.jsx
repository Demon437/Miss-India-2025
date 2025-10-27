import React, { useState } from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import About from './About';
import Highlight from './Highlight';
import GovernmentCultural from '../components/GovernmentCultural';
import CSREducational from '../components/CSREducational';
import Philosophy from '../components/Philosophy';
import Partnership from '../components/Partnership';
import Contact from '../components/Contact';
import GotoForm from './GotoForm';
import Form from '../components/Form';
import Footer from '../components/Footer';
const Home = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleLogoClick = () => {
    // changed: only show the requested sections when logo clicked
    setShowMainContent(true);
    setShowForm(false);
  };

  const handleGoToFormClick = () => {
    setShowForm(true);
    setShowMainContent(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ecruWhite-500 via-oldGold-200 to-ecruWhite-500 text-celtic-500">
      {/* Header will always be visible */}
      <Header onLogoClick={handleLogoClick} />

      {/* Initial view - only GotoForm */}
      {!showMainContent && !showForm && (
        <div className="mt-20">
          <GotoForm onFormClick={handleGoToFormClick} />
        </div>
      )}

      {/* Form view */}
      {showForm && (
        <div className="mt-20">
          <Form />
        </div>
      )}

      {/* Main content view - changed: render only About, Highlight, Partnership, Philosophy */}
      {showMainContent && (
        <>
          <div id="about" className="mt-10">
            <About />
          </div>

          <div id="highlight" >
            <Highlight />
          </div>

          <div id="philosophy" className="mt-12">
            <Philosophy />
          </div>

          <div id="partnership" className="mt-12">
            <Partnership />
          </div>

          <div id='contact' className="mt-12">
            <Contact />
          </div>


          <div id='contact' className="mt-12">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
