import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-lg p-4 rounded-full flex justify-between items-center mx-8 my-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <span className="text-green-500 text-4xl font-bold">⚡</span>
        <div>
          <h1 className="text-black font-bold text-xl">Fashion</h1>
          <p className="text-gray-500 text-sm -mt-1">Store</p>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="relative text-yellow-500">
            <span className="absolute -top-1 -left-2 w-6 h-6 bg-green-100 rounded-full"></span>
            <Link to="/" className="relative">Home</Link>
          </li>
          <li><Link to="/shop" className="hover:text-yellow-500 transition">Shop</Link></li>
          <li><Link to="/login" className="hover:text-yellow-500 transition">Login</Link></li>
          <li className="cart-icon">
            <Link to="/cart" className="hover:text-yellow-500 transition">🛒 Cart</Link>
          </li>
        </ul>
      </nav>

      {/* CTA Button */}
      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
        Free Consultation
      </button>
    </header>
  );
};

export default Header;
