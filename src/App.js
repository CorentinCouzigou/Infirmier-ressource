/* eslint-disable no-restricted-globals */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Accueil/Accueil';
import Reports from './pages/A propos/About';
import WhyMe from './pages/whyMe/whyMe';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import ParticlesComponent from './components/Particles/Particles';
import './reset.css';
import './App.scss';


function App() {
  return (
    <div className="App">
      {/* A Décommenter pour que la navbar soit active Important!!§ */}
      {/* <Navbar /> */}
      <ParticlesComponent />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<Reports />} />
        <Route path='/whyMe' element={<WhyMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
