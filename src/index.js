import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import store from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contact/:id" element={<Contact />} />
        <Route exact path="/restaurant/:id" element={<RestaurantMenu />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

