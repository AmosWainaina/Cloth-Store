import React from 'react';
import '../index.css'; 

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>We are a modern fashion store, providing stylish outfits for men & women.
                         Our goal is to bring the latest trends to your wardrobe!
                    </p>
                </div>

                
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: support@fashionstore.com</p>
                    <div className="social-icons">
                         <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                         <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    </div>

                </div>
            </div>

            
            <div className="footer-bottom">
                <p>© 2025 My Fashion Store. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

