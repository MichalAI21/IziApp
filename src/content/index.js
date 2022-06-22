import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const iziRoot = document.createElement('izi-container');
document.body.appendChild(iziRoot);
const root = createRoot(iziRoot);
root.render(<App />);