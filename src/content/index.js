import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const containerRoot = document.createElement('rn-container');
document.body.appendChild(containerRoot);
const root = ReactDOM.createRoot(containerRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
