import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../index.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <h1 className="logo">Fashion Store</h1>
            </div>
            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>  {}
                    <li><Link to="/shop">Shop</Link></li>  {}
                    <li><Link to="/login">Login</Link></li>  {}
                    <li className="cart-icon"><Link to="/cart">🛒 Cart</Link></li>  {}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
