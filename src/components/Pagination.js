import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const PageButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${({ active }) => (active ? '#333' : '#ddd')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    background-color: #555;
    color: #fff;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, i) => (
        <PageButton key={i} active={i + 1 === currentPage} onClick={() => onPageChange(i + 1)}>
          {i + 1}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;