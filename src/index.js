import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact/:id" element={<Contact />} />
      <Route exact path="/restaurant/:id" element={<RestaurantMenu />} />
    </Routes>
  </BrowserRouter>
);

