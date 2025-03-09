import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './Globalstyles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projecten from './pages/Projecten';
import Contact from './pages/Contact';
import Loader from './components/Loader'; // Importujemy loader

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Ukryj loader po 2 sekundach (symulacja ładowania)
    }, 2000);
  }, []);

  return (
    <Router basename="/danielfirma">
      <GlobalStyles />
      {isLoading ? (
        <Loader /> // Pokazujemy loader podczas ładowania
      ) : (
        <>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projecten" element={<Projecten />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
