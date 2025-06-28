import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import '../index.css';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="text-green-400 text-4xl font-bold">⚡</span>
                            <div>
                                <h1 className="text-white font-bold text-2xl">Fashion Store</h1>
                                <p className="text-gray-400 text-sm -mt-1">Style meets comfort</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                            We are a modern fashion store, providing stylish outfits for men & women. 
                            Our goal is to bring the latest trends to your wardrobe with premium quality and affordable prices.
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex space-x-4">
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200 group"
                            >
                                <FiFacebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-200 group"
                            >
                                <FiTwitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-200 group"
                            >
                                <FiInstagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-200 group"
                            >
                                <FiLinkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                                >
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/shop" 
                                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                                >
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/shop?category=men" 
                                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                                >
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                    Men's Collection
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/shop?category=women" 
                                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                                >
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                    Women's Collection
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/cart" 
                                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                                >
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                    Shopping Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <FiMail className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300">Email</p>
                                    <a 
                                        href="mailto:support@fashionstore.com" 
                                        className="text-green-400 hover:text-green-300 transition-colors duration-200"
                                    >
                                        support@fashionstore.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <FiPhone className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300">Phone</p>
                                    <a 
                                        href="tel:+1234567890" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                    >
                                        +1 (234) 567-8900
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                    <FiMapPin className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300">Address</p>
                                    <p className="text-purple-400">
                                        123 Fashion Street<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                            <p className="text-gray-400">Subscribe to our newsletter for the latest fashion trends and exclusive offers.</p>
                        </div>
                        
                        <div className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-r-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2025 Fashion Store. All rights reserved.
                        </p>
                        
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                                Return Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;