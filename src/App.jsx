import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import Highlight from './pages/Highlight';
import Contact from './components/Contact';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/highlight" element={<Highlight />} />

          <Route path="/signIn" element={<SignIn />} />

          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
