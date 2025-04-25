

import React from 'react';
import ReactDOM from 'react-dom/client';  // Bei Vite verwendest du ReactDOM aus 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/webmaster1321/"> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
