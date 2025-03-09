import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animacja obracania
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Kontener tła loadera
const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); // Mleczne tło
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // Nad wszystkimi elementami
`;

// Stylizacja spinnera
const Spinner = styled.div`
  border: 6px solid rgba(255, 255, 255, 0.3);
  border-top: 6px solid #4a4a4a; // Kolor animacji
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => (
  <LoaderOverlay>
    <Spinner />
  </LoaderOverlay>
);

export default Loader;
