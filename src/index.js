import React from 'react';
import { createRoot } from 'react-dom/client'; // poprawiony import
import App from './App';

// Znajdź element root w pliku HTML
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Renderuj aplikację
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
