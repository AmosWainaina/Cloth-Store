import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Top Section - Logo & About */}
                <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-gray-700">
                    
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <span className="text-green-500 text-4xl font-bold">⚡</span>
                        <div>
                            <h1 className="text-white font-bold text-xl">Fashion</h1>
                            <p className="text-gray-400 text-sm -mt-1">Store</p>
                        </div>
                    </div>

                    {/* About Us */}
                    <div className="text-center md:text-left mt-4 md:mt-0 max-w-md">
                        <h2 className="text-lg font-semibold">About Us</h2>
                        <p className="text-gray-400 text-sm">
                            We are a modern fashion store, providing stylish outfits for men & women. 
                            Our goal is to bring the latest trends to your wardrobe!
                        </p>
                    </div>
                </div>

                {/* Middle Section - Contact & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8">
                    
                    {/* Contact Info */}
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <p className="text-gray-400 text-sm">Email: support@fashionstore.com</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white text-xl transition-all duration-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-xl transition-all duration-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-xl transition-all duration-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
                <p>© 2025 Fashion Store. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
