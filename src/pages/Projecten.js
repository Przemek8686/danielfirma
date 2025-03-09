import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import Pagination from '../components/Pagination';


// Import przykładowych zdjęć
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

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
  border: 1px solid #ccc;
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
  { src: project1, alt: 'Łazienka nowoczesna' },
  { src: project2, alt: 'Schody drewniane' },
  { src: project3, alt: 'Salon minimalistyczny' },
  { src: project4, alt: 'Kuchnia otwarta' },
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