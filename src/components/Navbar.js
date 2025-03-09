import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom'; // Dodaj useLocation do sprawdzania aktywnego linku
import { FaBars } from 'react-icons/fa';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #4a4a4a;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  padding: 0.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    background-color: #4a4a4a;
    padding: 0.5rem;
    position: absolute;
    top: 240px; // Ustawienie top na 240px na mniejszych ekranach
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1000;
    overflow-y: auto;
  }

  @media (max-width: 500px) {
    top: 240px; // Zachowanie top: 240px na 500px
  }

  @media (max-width: 400px) {
    top: 198px; // Zachowanie top: 240px na 400px
  }

  @media (max-width: 375px) {
    top:198px; // Zachowanie top: 240px na 375px
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem; // Mniejszy rozmiar czcionki
  transition: all 0.3s ease; // Dodaj płynną animację
  position: relative; // Ustawiamy pozycjonowanie względne

  &:hover {
    color: rgb(163, 157, 170);
  }

  &.active {
    color:white;
   font-size: 1rem; // Powiększenie aktywnego linku
    padding-bottom: 0.2rem; // Dodaj padding od dołu, aby podkreślenie było bliżej tekstu
    border-bottom: 2px solid white; // Podkreślenie aktywnego linku
  }
`;

const Hamburger = styled.div`
  display: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #4a4a4a;
  padding: 0.5rem; // Dodany padding dla lepszego wyglądu
  position: relative; // Ustawiamy pozycjonowanie względne
  z-index: 1001; // Upewnij się, że hamburger jest na wierzchu
  margin-bottom: 1px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Użyj useLocation do sprawdzania aktywnego linku

  return (
    <>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <FaBars style={{ marginLeft: '1rem', marginTop: '9px' }} /> {/* Dodany margines z lewej strony dla ikony */}
      </Hamburger>
      <NavContainer $isOpen={isOpen}> {/* Przekaż $isOpen jako transient prop */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={location.pathname === '/' ? 'active' : ''} // Dodaj klasę active, jeśli link jest aktywny
        >
          Home
        </NavLink>
        <NavLink
          to="/projecten"
          onClick={() => setIsOpen(false)}
          className={location.pathname === '/projecten' ? 'active' : ''} // Dodaj klasę active, jeśli link jest aktywny
        >
          Projecten
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={location.pathname === '/contact' ? 'active' : ''} // Dodaj klasę active, jeśli link jest aktywny
        >
          Contact
        </NavLink>
      </NavContainer>
    </>
  );
};

export default Navbar;