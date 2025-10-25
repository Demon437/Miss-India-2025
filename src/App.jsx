import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import Highlight from './pages/Highlight';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/highlight" element={<Highlight />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
