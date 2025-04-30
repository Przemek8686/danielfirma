import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GlobalStyles from './Globalstyles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projecten from './pages/Projecten';
import Contact from './pages/Contact';
import Loader from './components/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Router basename="/danielfirma">
      <GlobalStyles />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <Routes>
            {/* Główna ścieżka z przekierowaniem */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projecten" element={<Projecten />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback dla nieznanych ścieżek */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;