import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom'; // Dodaj useLocation do sprawdzania aktywnego linku
import { FaBars } from 'react-icons/fa';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: rgb(56, 52, 55); // Ciemne tło stopki
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); // Dodany cień od dołu
  padding: 0.4rem; /* Zmniejszony padding */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')}; // Użyj transient prop $isOpen
    background-color: #50494f; // Kolor tła menu na mniejszych ekranach
    padding: 0.5rem; /* Zmniejszony padding na mniejszych ekranach */
    position: absolute; // Pozycjonowanie absolutne
    top: 277px; // Odstęp od góry (dostosuj do wysokości hamburgera)
    left: 0;
    width: 100%;
    height: auto; // Wysokość dostosowuje się do zawartości
    z-index: 1000; // Upewnij się, że menu jest na wierzchu
    overflow-y: auto; // Dodaj przewijanie, jeśli zawartość jest zbyt długa
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
  background-color: #50494f;
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