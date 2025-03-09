import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImage from '../tlo.jpg'; // Zaimportuj obraz tła z dysku

// Animacja dla ramki
const slideIn = keyframes`
  from {
    transform: translate(-150%, -50%); // Start poza ekranem z lewej strony
  }
  to {
    transform: translate(-50%, -50%); // Koniec w środku
  }
`;

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
  height: 70vh; // Ustawiamy wysokość na 70% ekranu
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Ukryj ewentualny pasek przewijania
  box-sizing: border-box; // Uwzględnij padding w wysokości
  background-image: url(${backgroundImage}); // Ustaw tło
  background-size: cover; // Dopasuj tło do rozmiaru kontenera
  background-position: center; // Wyśrodkuj tło
  background-repeat: no-repeat; // Zapobiegaj powtarzaniu tła
  position: relative; // Ustawiamy pozycjonowanie względne
  z-index: 1; // Upewnij się, że HomeContainer jest pod menu

  @media (max-width: 768px) {
    height: 70vh; // Zachowaj tę samą wysokość na mniejszych ekranach
    padding: 1rem; // Mniejszy padding na mniejszych ekranach
  }
`;

const ContentBox = styled.div`
  border: 2px solid #fff; // Białe obramowanie
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.7); // Półprzezroczyste tło
  color: #fff; // Biały tekst
  animation: ${slideIn} 1s ease-out; // Animacja wjeżdżania
  max-width: 90%; // Ogranicz szerokość ramki
  box-sizing: border-box; // Uwzględnij padding w wysokości
  position: absolute; // Pozycjonowanie absolutne
  top: 50%; // Przesuń ramkę do 50% wysokości kontenera
  left: 50%; // Przesuń ramkę do 50% szerokości kontenera
  transform: translate(-50%, -50%); // Wyśrodkuj ramkę

  @media (max-width: 768px) {
    padding: 1rem; // Mniejszy padding na mniejszych ekranach
    max-width: 95%; // Zwiększ szerokość na mniejszych ekranach
  }
`;

const Heading = styled.h2`
  font-size: 2rem; // Rozmiar czcionki
  margin-bottom: 1rem; // Odstęp od dołu
  color: #fff; // Kolor tekstu
  text-transform: uppercase; // Zamiana tekstu na wielkie litery
  letter-spacing: 2px; // Odstęp między literami

  @media (max-width: 768px) {
    font-size: 1.5rem; // Mniejszy rozmiar czcionki na mniejszych ekranach
    letter-spacing: 1px; // Mniejszy odstęp między literami
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; // Jeszcze mniejszy rozmiar czcionki na bardzo małych ekranach
  }
`;

const Paragraph = styled.p`
  font-size: 1rem; // Rozmiar czcionki
  margin-bottom: 1.5rem; // Odstęp od dołu
  color: #fff; // Kolor tekstu
  line-height: 1.5; // Wysokość linii

  @media (max-width: 768px) {
    font-size: 0.9rem; // Mniejszy rozmiar czcionki na mniejszych ekranach
    margin-bottom: 1rem; // Mniejszy odstęp od dołu
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; // Jeszcze mniejszy rozmiar czcionki na bardzo małych ekranach
  }
`;

const List = styled.ul`
  list-style-type: none; // Usuń domyślne style listy
  padding: 0;
  margin: 0;
  text-align: left; // Wyrównaj tekst do lewej
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Wyrównaj elementy listy do lewej
`;

const ListItem = styled.li`
  display: flex; // Użyj flexboxa do wyrównania myślnika i tekstu
  align-items: center; // Wyśrodkuj myślnik i tekst w pionie
  width: 100%; // Ustaw stałą szerokość
  padding: 0.5rem 0; // Dodaj padding dla lepszego odstępu

  &::before {
    content: "-"; // Dodaj myślnik przed każdym elementem
    margin-right: 0.5rem; // Dodaj odstęp między myślnikiem a tekstem
    flex-shrink: 0; // Zapobiegaj kurczeniu się myślnika
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; // Mniejszy rozmiar czcionki na mniejszych ekranach
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; // Jeszcze mniejszy rozmiar czcionki na bardzo małych ekranach
  }
`;

const Footer = styled.footer`
  background-color: rgb(56, 52, 55); // Ciemne tło stopki
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); // Dodany cień od dołu
  color: #fff; // Biały tekst
  text-align: center;
  padding: 1rem;
  font-size: 0.7rem;
  position: fixed; // Ustawiamy stopkę na stałe na dole ekranu
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2; // Upewnij się, że stopka jest na wierzchu

  @media (max-width: 768px) {
    font-size: 0.6rem; // Mniejszy rozmiar czcionki na mniejszych ekranach
  }
`;

const Home = () => (
  <>
    <HomeContainer>
      <ContentBox>
        <Heading>Welkom bij Dan Bouw</Heading>
        <Paragraph>Wij zijn gespecialiseerd in:</Paragraph>
        <List>
          <ListItem>kozijn</ListItem>
          <ListItem>deur</ListItem>
          <ListItem>timmerman</ListItem>
          <ListItem>electra</ListItem>
          <ListItem>tegelwerk</ListItem>
        </List>
      </ContentBox>
    </HomeContainer>
    <Footer>
      Website gemaakt door: 1986krawiec1986@gmail.com | (+31) 633-652-508
    </Footer>
  </>
);

export default Home;