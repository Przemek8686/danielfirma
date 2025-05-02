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
    const loadAssets = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } finally {
        setIsLoading(false);
      }
    };

    loadAssets();
  }, []);

  return (
    <div className="app">
      <Router> {/* Usunięto basename */}
        <GlobalStyles />
        
        {isLoading ? (
          <Loader fullScreen />
        ) : (
          <>
            <Header />
            <Navbar />
            <main className="content">
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projecten" element={<Projecten />} />
                <Route path="/contact" element={<Contact />} />
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