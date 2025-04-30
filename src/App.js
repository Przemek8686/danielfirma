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
    // Symulacja ładowania zasobów
    const loadAssets = async () => {
      try {
        // Tutaj można dodać ładowanie rzeczywistych zasobów
        await new Promise(resolve => setTimeout(resolve, 2000));
      } finally {
        setIsLoading(false);
      }
    };

    loadAssets();
  }, []);

  return (
    <div className="app">
      <Router basename="/danielfirma">
        <GlobalStyles />
        
        {isLoading ? (
          <Loader fullScreen />
        ) : (
          <>
            <Header />
            <Navbar />
            <main className="content">
              <Routes>
                {/* Główna ścieżka z przekierowaniem */}
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projecten" element={<Projecten />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Fallback dla nieznanych ścieżek */}
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </main>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;