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

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0.8rem;
    gap: 0.5rem; /* Dodaje odstęp między logo a tekstem */
  }

  @media (max-width: 400px) {
    padding: 0.6rem;
    gap: 0.3rem;
  }

  @media (max-width: 375px) {
    padding: 0.5rem;
    gap: 0.2rem;
  }
`;

const Logo = styled.img`
  height: 100px;

  @media (max-width: 500px) {
    height: 75px;
  }

  @media (max-width: 400px) {
    height: 70px;
  }

  @media (max-width: 375px) {
    height: 65px;
  }
`;

const Title = styled.h1`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 35px;
  letter-spacing: 2px;
  color: white;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 28px;
  }

  @media (max-width: 400px) {
    font-size: 26px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const Slogan = styled.p`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 13px;
  letter-spacing: 1.5px;
  color: white;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 11px;
  }

  @media (max-width: 375px) {
    font-size: 10px;
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