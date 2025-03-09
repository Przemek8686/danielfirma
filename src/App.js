import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './Globalstyles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projecten from './pages/Projecten';
import Contact from './pages/Contact';

const App = () => (
  <Router basename="/danielfirma"> {/* Dodaj `basename` zgodne z GitHub Pages */}
    <GlobalStyles />
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} /> {/* Strona domyślna */}
      <Route path="/projecten" element={<Projecten />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
