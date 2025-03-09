import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo1.png'; // Zaimportuj logo z dysku

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-image: radial-gradient(
    circle 950px at 2.5% 8%,
    rgba(44, 103, 176, 1) 0%,
    rgba(35, 56, 136, 1) 90%
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Wyśrodkowanie elementów na mniejszych ekranach */
    text-align: center; /* Wyśrodkowanie tekstu na mniejszych ekranach */
    padding: 1rem; /* Mniejszy padding na mniejszych ekranach */
  }
`;

const Logo = styled.img`
  height: 100px; /* Rozmiar logo na większych ekranach */

  @media (max-width: 768px) {
    height: 80px; /* Mniejszy rozmiar logo na mniejszych ekranach */
    margin-bottom: 0.5rem; /* Dodany margines pod logo */
  }
`;

const Title = styled.h1`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 35px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: white;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin: 0; /* Usunięcie domyślnego marginesu */

  @media (max-width: 768px) {
    font-size: 28px; /* Mniejszy rozmiar czcionki na mniejszych ekranach */
    margin-bottom: 0.5rem; /* Dodany margines pod tytułem */
  }
`;

const Slogan = styled.p`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: white;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin: 0; /* Usunięcie domyślnego marginesu */

  @media (max-width: 768px) {
    font-size: 12px; /* Mniejszy rozmiar czcionki na mniejszych ekranach */
  }
`;

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo src={logo} alt="Dan Bouw Logo" />
    </Link>
    <div>
      <Title>Dan Bouw</Title>
      <Slogan>Specjalist in alle renovaties - zowel binnen als buiten, ramen, kozijnen</Slogan>
    </div>
  </HeaderContainer>
);

export default Header;