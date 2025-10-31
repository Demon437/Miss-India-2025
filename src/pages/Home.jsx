import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import Ribbon from '../components/Ribbon';


const Home = () => {

  const handleScrollToSection = (title) => {
    const map = {
      "Destination Weddings": "Weddings & Celebrations",
      "Beauty Pageants & Fashion Shows": "Beauty Pageants & Fashion Shows",
      "Corporate Events": "Corporate Excellence",
      "Concerts & Shows": "Talent & Entertainment",
      "MICE Events": "Government & Cultural Grandeur",
    };

    const targetTitle = map[title];
    if (!targetTitle) return;

    const id = targetTitle.replace(/\s+/g, "-").toLowerCase();
    const section = document.getElementById(id);

    if (section) {
      const headerHeight = 150; // ← iss number ko apne header ke height ke hisaab se change kar sakte ho
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  const [showMainContent, setShowMainContent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setShowMainContent(true);
    setShowForm(false);
  };

  const handleGoToFormClick = () => {
    setShowForm(true);
    setShowMainContent(false);
  };

  const handleNavigateSection = (sectionId) => {
    if (sectionId === 'form') {
      // Open the external GotoForm view (not the internal Form component)
      setShowForm(false);
      setShowMainContent(false);
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        // no-op
      }
      return;
    }
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

  // Handle navigation from other routes/components via router state
  React.useEffect(() => {
    const sectionFromState = location.state && (location.state.section || location.state.scrollTo);
    if (sectionFromState) {
      if (sectionFromState === 'form') {
        setShowForm(true);
        setShowMainContent(false);
      } else {
        setShowMainContent(true);
        setShowForm(false);
        setPendingSection(sectionFromState);
      }
      // clean up state so back/forward doesn't retrigger
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ecruWhite-500 via-oldGold-200 to-ecruWhite-500 text-celtic-500">
      {/* Header will always be visible */}
      {/* <Header onLogoClick={handleLogoClick} onNavigateSection={handleNavigateSection} /> */}

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
          <div id="home">
            < Hero onDiscoverMore={() => handleNavigateSection('ourworld')} onNavigateSection={handleNavigateSection} />
          </div>

          <div id='services'>
            <Highlight onCardSelect={handleScrollToSection} />
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
