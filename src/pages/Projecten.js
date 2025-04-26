import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import Pagination from '../components/Pagination';


// Import przykładowych zdjęć
import project1 from '../assets/IMG-20250426-WA0006.jpg';
import project2 from '../assets/IMG-20250426-WA0013.jpg';
import project3 from '../assets/IMG-20250426-WA0016.jpg';
import project4 from '../assets/IMG-20250426-WA0017.jpg';
import project5 from '../assets/IMG-20250426-WA0022.jpg';
import project6 from '../assets/IMG-20250426-WA0025.jpg';
import project7 from '../assets/IMG-20250426-WA0027.jpg';
import project8 from '../assets/IMG-20250426-WA0029.jpg';
import project9 from '../assets/IMG-20250426-WA0029.jpg';
import project10 from '../assets/IMG-20250426-WA0030.jpg';
import project11 from '../assets/IMG-20250426-WA0033.jpg';
import project12 from '../assets/IMG-20250426-WA0035.jpg';
import project13 from '../assets/IMG-20250426-WA0036.jpg';
import project14 from '../assets/IMG-20250426-WA0038.jpg';
import project15 from '../assets/IMG-20250426-WA0040.jpg';
import project16 from '../assets/IMG-20250426-WA0043.jpg';
import project17 from '../assets/IMG-20250426-WA0044.jpg';
import project18 from '../assets/IMG-20250426-WA0045.jpg';
import project19 from '../assets/IMG-20250426-WA0047.jpg';
import project20 from '../assets/IMG-20250426-WA0046.jpg';
import project21 from '../assets/IMG-20250426-WA0049.jpg';
import project22 from '../assets/IMG-20250426-WA0050.jpg';






const ProjectenContainer = styled.div`
  padding: 2rem;
  text-align: center; /* Wyśrodkowanie napisu "Projecten" */
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
 
  width: 100%;
  border: 4px solid #ccc;
  border-radius: 20px;
  font-size: 12px;
  outline: none;
  height: 40px; /* Ustalamy stałą wysokość pola wyszukiwania */

  &:focus {
    border-color: #2a5298;
  }
`;



// Tablica z danymi zdjęć
const images = [
  { src: project1, alt: 'Raam' },
  { src: project2, alt: 'Deur' },
  { src: project3, alt: 'Garagedeur' },
  { src: project4, alt: 'Raam' },
  { src: project5, alt: 'Raam' },
  { src: project6, alt: 'Terras Raam' },
  { src: project7, alt: 'Raam' },
  { src: project8, alt: 'Deur' },
  { src: project9, alt: 'Deur' },
  { src: project10, alt: 'Deur' },
  { src: project11, alt: 'Deur' },
  { src: project12, alt: 'Deur' },
  { src: project13, alt: 'Deur' },
  { src: project14, alt: 'Raam' },
  { src: project15, alt: 'Raam' },
  { src: project16, alt: 'Terras Raam' },
  { src: project17, alt: 'Raam' },
  { src: project18, alt: 'Deur' },
  { src: project19, alt: 'Raam' },
  { src: project20, alt: 'Raam' },
  { src: project21, alt: 'Raam' },
  { src: project22, alt: 'Raam' },
  // Dodaj więcej zdjęć tutaj
];

const Projecten = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const imagesPerPage = 8;

  // Filtrowanie zdjęć na podstawie wyszukiwanej frazy
  const filteredImages = images.filter((image) =>
    image.alt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <ProjectenContainer>
      <h2>Projecten</h2>

      {/* Wyszukiwarka */}
      <SearchContainer>
        <SearchInputWrapper>
          <SearchInput
            type="text"
            placeholder="Zoek op projectnaam bijv:badkamer, trap, tegels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
         </SearchInputWrapper>
      </SearchContainer>

      {/* Galeria */}
      <Gallery images={currentImages} />

      {/* Paginacja */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredImages.length / imagesPerPage)}
        onPageChange={setCurrentPage}
      />
    </ProjectenContainer>
  );
};

export default Projecten;