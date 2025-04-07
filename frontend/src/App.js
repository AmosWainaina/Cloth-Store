import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "https://kit.fontawesome.com/ab71cfecb1.js";



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> { Home  }
        <Route path="/shop" element={<Shop />} /> { Shop }
        <Route path="/login" element={<Login />} /> { Login }
        <Route path="/cart" element={<Cart />} /> { Cart }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
