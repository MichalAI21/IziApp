import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const iziContainer = document.createElement('izi-container');
document.body.appendChild(iziContainer);
const root = createRoot(iziContainer);
root.render(<App />);
