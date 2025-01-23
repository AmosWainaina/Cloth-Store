import React from 'react';
import '../index.css'; // 

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <h1 className="logo">Fashion Store</h1>
            </div>
            <nav>
                <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Login</a></li>
                    <li className="cart-icon"><a href="#">🛒 Cart</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
