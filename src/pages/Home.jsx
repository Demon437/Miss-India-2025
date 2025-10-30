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
import Hero from '../components/Hero';

import OurWorld from '../components/OurWorld';



const Home = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);

  const handleLogoClick = () => {
    setShowMainContent(true);
    setShowForm(false);
  };

  const handleGoToFormClick = () => {
    setShowForm(true);
    setShowMainContent(false);
  };

  const handleNavigateSection = (sectionId) => {
    setShowMainContent(true);
    setShowForm(false);
    setPendingSection(sectionId);
  };

  React.useEffect(() => {
    if (showMainContent && pendingSection) {
      const element = document.getElementById(pendingSection);
      if (element) {
        const headerHeight = 64;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        setPendingSection(null);
      }
    }
  }, [showMainContent, pendingSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ecruWhite-500 via-oldGold-200 to-ecruWhite-500 text-celtic-500">
      {/* Header will always be visible */}
      <Header onLogoClick={handleLogoClick} onNavigateSection={handleNavigateSection} />

      {/* Initial view - only GotoForm */}
      {!showMainContent && !showForm && (
        <div>
          <GotoForm onFormClick={handleGoToFormClick} />
        </div>
      )}

      {/* Form view */}
      {showForm && (
        <div >
          <Form />
        </div>
      )}

      {/* Main content view - changed: render only About, Highlight, Partnership, Philosophy */}
      {showMainContent && (
        <>
          <div id="home" className="mt-10">
            < Hero onDiscoverMore={() => handleNavigateSection('ourworld')} />
          </div>


          <div id='services'>
            <Highlight />
          </div>

          <div id='about'>
            <About />
          </div>
          <div id="ourworld" >
            < OurWorld />
          </div>



          <div id='contact'>
            <Footer onNavigateSection={handleNavigateSection} />
          </div>

        </>
      )}
    </div>
  );
};

export default Home;
