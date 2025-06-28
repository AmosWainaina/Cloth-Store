import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiUser, FiLogOut, FiMenu, FiX, FiHome, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const cartItemCount = cart?.total_items || 0;

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClass = (path) => {
    return `flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
      isActive(path)
        ? 'bg-green-100 text-green-700 shadow-sm'
        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
    }`;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <span className="text-green-500 text-4xl font-bold group-hover:scale-110 transition-transform duration-200">⚡</span>
              <div className="absolute -inset-1 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
            <div>
              <h1 className="text-gray-900 font-bold text-2xl group-hover:text-green-600 transition-colors duration-200">
                Fashion Store
              </h1>
              <p className="text-gray-500 text-sm -mt-1">Style meets comfort</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/" className={navLinkClass('/')}>
              <FiHome size={18} />
              <span>Home</span>
            </Link>
            <Link to="/shop" className={navLinkClass('/shop')}>
              <FiShoppingBag size={18} />
              <span>Shop</span>
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
                <Link 
                  to="/cart" 
                  className="relative group p-3 rounded-full hover:bg-green-50 transition-all duration-200"
                >
                  <FiShoppingCart size={24} className="text-gray-700 group-hover:text-green-600" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium animate-pulse">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                
                <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FiUser size={16} className="text-white" />
                  </div>
                  <span className="font-medium text-gray-700">
                    {user?.first_name || user?.username}
                  </span>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  <FiLogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
                <Link 
                  to="/login" 
                  className="px-6 py-2 text-gray-700 hover:text-green-600 font-medium rounded-lg hover:bg-green-50 transition-all duration-200"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-green-500 hover:bg-green-50 transition-all duration-200"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`${navLinkClass('/')} justify-start`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHome size={18} />
                <span>Home</span>
              </Link>
              <Link 
                to="/shop" 
                className={`${navLinkClass('/shop')} justify-start`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FiShoppingBag size={18} />
                <span>Shop</span>
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/cart" 
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <FiShoppingCart size={18} />
                      <span>Cart</span>
                    </div>
                    {cartItemCount > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                  
                  <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <FiUser size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-700">
                      {user?.first_name || user?.username}
                    </span>
                  </div>
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                  >
                    <FiLogOut size={18} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                  <Link 
                    to="/login" 
                    className="px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold px-4 py-3 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;