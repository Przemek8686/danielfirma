import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 kolumny na dużych ekranach */
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 kolumna na telefonach */
  }
`;

const ImageTile = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%; /* Szerokość kafelka */
  height: 200px; /* Stała wysokość kafelka */
  border-radius: 8px; /* Zaokrąglone rogi */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Cień */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05); /* Lekkie powiększenie przy najechaniu */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Skaluje i przycina zdjęcie, aby wypełnić kafelek */
  transition: transform 0.3s, filter 0.3s;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s;

  @media (min-width: 769px) {
    &:hover {
      opacity: 1;
    }
  }
`;

const Description = styled.div`
  display: none; /* Domyślnie ukrywamy opis na dużych ekranach */

  @media (max-width: 768px) {
    display: block; /* Pokazujemy opis na małych ekranach */
    text-align: center;
    margin-top: 0.5rem;
    color: #333;
  }
`;

const FullScreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff0000; /* Czerwone tło */
  border: none;
  color: #fff; /* Biały kolor tekstu */
  font-size: 1.5rem;
  width: 40px; /* Szerokość kółka */
  height: 40px; /* Wysokość kółka */
  border-radius: 50%; /* Kółko */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Cień dla lepszego efektu */
  transition: background 0.3s;

  &:hover {
    background: #cc0000; /* Ciemniejszy czerwony przy najechaniu */
  }
`;

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <GalleryContainer>
        {images.map((image, index) => (
          <div key={index}>
            <ImageTile onClick={() => setSelectedImage(image)}>
              <Image src={image.src} alt={image.alt} />
              <Overlay>{image.alt}</Overlay>
            </ImageTile>
            <Description>{image.alt}</Description>
          </div>
        ))}
      </GalleryContainer>
      {selectedImage && (
        <FullScreenImage>
          <CloseButton onClick={() => setSelectedImage(null)}>X</CloseButton>
          <img src={selectedImage.src} alt={selectedImage.alt} style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </FullScreenImage>
      )}
    </>
  );
};

export default Gallery;