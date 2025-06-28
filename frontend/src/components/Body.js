import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTruck, FiClock, FiAward, FiShield, FiStar, FiHeart } from 'react-icons/fi';
import img1 from '../Assets/img1.png.jpg';
import img14 from '../Assets/img2.png.jpg';
import img5 from '../Assets/img5.png.jpg';
import img6 from '../Assets/img6.png.jpg';
import img7 from '../Assets/img15.png.jpg';
import '../index.css';

const Body = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    <FiStar className="w-4 h-4 mr-2" />
                                    Best Fashion Brand 2024
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Fashion That
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                                        Speaks Style
                                    </span>
                                </h1>
                                
                                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                    Discover the latest trends in fashion with our curated collection of premium clothing for men and women. Style meets comfort in every piece.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    to="/shop"
                                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                >
                                    Shop Now
                                    <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                                
                                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-green-500 hover:text-green-600 transition-all duration-200">
                                    <FiHeart className="mr-2 w-5 h-5" />
                                    View Wishlist
                                </button>
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">10K+</div>
                                    <div className="text-sm text-gray-600">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">500+</div>
                                    <div className="text-sm text-gray-600">Products</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">4.9</div>
                                    <div className="text-sm text-gray-600">Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Images */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                        <img 
                                            src={img14} 
                                            alt="Men's Fashion Collection" 
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="font-semibold">Men's Collection</h3>
                                            <p className="text-sm">Latest Trends</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                                <FiTruck className="w-6 h-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                                                <p className="text-sm text-gray-600">On orders over $50</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-6 pt-12">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                <FiShield className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Quality Guarantee</h4>
                                                <p className="text-sm text-gray-600">30-day return policy</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                        <img 
                                            src={img1} 
                                            alt="Women's Fashion Collection" 
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="font-semibold">Women's Collection</h3>
                                            <p className="text-sm">Elegant Styles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Fashion Store?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're committed to providing you with the best shopping experience and highest quality products
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group text-center p-8 rounded-2xl hover:bg-green-50 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                                <FiTruck className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Shipping</h3>
                            <p className="text-gray-600">Free shipping on all orders over $50. Fast delivery within 3-5 business days.</p>
                        </div>
                        
                        <div className="group text-center p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                                <FiClock className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                            <p className="text-gray-600">Round-the-clock customer support to help you with any questions or concerns.</p>
                        </div>
                        
                        <div className="group text-center p-8 rounded-2xl hover:bg-purple-50 transition-all duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                                <FiAward className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
                            <p className="text-gray-600">Carefully curated products from top brands ensuring the highest quality standards.</p>
                        </div>
                        
                        <div className="group text-center p-8 rounded-2xl hover:bg-orange-50 transition-all duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                                <FiShield className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Money Back Guarantee</h3>
                            <p className="text-gray-600">30-day money-back guarantee. Not satisfied? Get your money back, no questions asked.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                        <p className="text-xl text-gray-600">Discover our diverse collection tailored for every style</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link to="/shop?category=women" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="aspect-w-4 aspect-h-5">
                                <img 
                                    src={img5} 
                                    alt="Women's Fashion" 
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Women's Collection</h3>
                                <p className="text-sm opacity-90 mb-4">Elegant and sophisticated styles</p>
                                <div className="inline-flex items-center text-sm font-medium">
                                    Shop Now <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </div>
                            </div>
                        </Link>
                        
                        <Link to="/shop?category=men" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="aspect-w-4 aspect-h-5">
                                <img 
                                    src={img6} 
                                    alt="Men's Fashion" 
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Men's Collection</h3>
                                <p className="text-sm opacity-90 mb-4">Modern and trendy designs</p>
                                <div className="inline-flex items-center text-sm font-medium">
                                    Shop Now <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </div>
                            </div>
                        </Link>
                        
                        <Link to="/shop?category=unisex" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="aspect-w-4 aspect-h-5">
                                <img 
                                    src={img7} 
                                    alt="Unisex Fashion" 
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Unisex Collection</h3>
                                <p className="text-sm opacity-90 mb-4">Versatile styles for everyone</p>
                                <div className="inline-flex items-center text-sm font-medium">
                                    Shop Now <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Upgrade Your Style?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who have transformed their wardrobe with our premium fashion collection.
                    </p>
                    <Link 
                        to="/shop"
                        className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                        Start Shopping
                        <FiArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Body;