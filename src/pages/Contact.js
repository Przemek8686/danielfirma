import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center; /* Wyśrodkowanie w poziomie */
  align-items: center; /* Wyśrodkowanie w pionie */
  min-height: 60vh; /* Zmniejszona wysokość kontenera */
  padding: 2rem;
  text-align: center;
  background-color: #f0f0f0; /* Tło dla lepszego efektu wizualnego */
`;

const ContactInfo = styled.div`
  margin: 0 auto; /* Wyśrodkowanie */
  padding: 2rem; /* Większy padding */
  border: 6px solid #2a5298; /* Grubsze obramowanie */
  border-radius: 15px; /* Zaokrąglone rogi */
  max-width: 500px; /* Powiększony kontener */
  width: 100%; /* Pełna szerokość */
  background-color: #f9f9f9; /* Tło */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); /* Mocniejszy cień */
  display: flex;
  flex-direction: column; /* Elementy ułożone w pionie */
  align-items: center; /* Wyśrodkowanie elementów w poziomie */
  margin-top: -2rem; /* Przesunięcie ContactInfo wyżej */
`;

const ContactItem = styled.p`
  margin: 0.5rem 0; /* Mniejszy margines */
  font-size: 1.2rem; /* Większa czcionka */
  color: #333;
  width: 100%; /* Pełna szerokość */
  text-align: left; /* Tekst wyrównany do lewej */

  @media (max-width: 768px) {
    font-size: 1rem; /* Mniejsza czcionka na mniejszych ekranach */
  }
`;

const EmailLink = styled.a`
  color: #2a5298; /* Kolor linku */
  text-decoration: none; /* Usunięcie podkreślenia */
  transition: color 0.3s;

  &:hover {
    color: rgb(14, 35, 64); /* Ciemniejszy kolor po najechaniu */
    text-decoration: underline; /* Podkreślenie po najechaniu */
  }
`;

const PhoneLink = styled.a`
  color: #2a5298; /* Kolor linku */
  text-decoration: none; /* Usunięcie podkreślenia */
  transition: color 0.3s;

  &:hover {
    color: rgb(14, 35, 64); /* Ciemniejszy kolor po najechaniu */
    text-decoration: underline; /* Podkreślenie po najechaniu */
  }
`;

const Contact = () => {
  const email = 'danbouw.nl@gmail.com';
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <ContactContainer>
      <ContactInfo>
        <h2>Dan Bouw</h2>
        <ContactItem>
          Email:{' '}
          <EmailLink href={gmailUrl} target="_blank" rel="noopener noreferrer">
            {email}
          </EmailLink>
        </ContactItem>
        <ContactItem>
          Telefoon:{' '}
          <PhoneLink href="tel:+31638605093">+31 638 605 093</PhoneLink>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;