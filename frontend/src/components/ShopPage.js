import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../context/CartContext';
import { FiFilter, FiStar, FiShoppingCart } from 'react-icons/fi';
import api from '../api';
import '../index.css';

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [priceFilter, setPriceFilter] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [products, categoryFilter, priceFilter, sortBy]);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/api/products/');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const filterProducts = () => {
        let filtered = [...products];

        // Category filter
        if (categoryFilter !== 'all') {
            filtered = filtered.filter(product => product.category === categoryFilter);
        }

        // Price filter
        if (priceFilter !== 'all') {
            const [min, max] = priceFilter.split('-').map(Number);
            if (max) {
                filtered = filtered.filter(product => product.price >= min && product.price <= max);
            } else {
                filtered = filtered.filter(product => product.price >= min);
            }
        }

        // Sort
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                default:
                    return a.title.localeCompare(b.title);
            }
        });

        setFilteredProducts(filtered);
    };

    const handleAddToCart = async (productId) => {
        await addToCart(productId, 1);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FiStar
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            
            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Fashion Collection</h1>
                        <p className="text-xl md:text-2xl opacity-90">Discover the latest trends in fashion</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center space-x-2">
                                <FiFilter className="text-gray-500" />
                                <span className="font-medium text-gray-700">Filters:</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <select
                                    value={categoryFilter}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="all">All Categories</option>
                                    <option value="men">Men's Wear</option>
                                    <option value="women">Women's Wear</option>
                                    <option value="unisex">Unisex</option>
                                </select>

                                <select
                                    value={priceFilter}
                                    onChange={(e) => setPriceFilter(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="all">All Prices</option>
                                    <option value="0-25">$0 - $25</option>
                                    <option value="25-50">$25 - $50</option>
                                    <option value="50-100">$50 - $100</option>
                                    <option value="100">$100+</option>
                                </select>

                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="name">Sort by Name</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                            </div>

                            <button
                                onClick={() => {
                                    setCategoryFilter('all');
                                    setPriceFilter('all');
                                    setSortBy('name');
                                }}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {filteredProducts.length} Products Found
                        </h2>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                            {product.title}
                                        </h3>
                                        
                                        <div className="flex items-center mb-3">
                                            <div className="flex items-center space-x-1">
                                                {renderStars(product.rating)}
                                            </div>
                                            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-2xl font-bold text-green-600">
                                                ${product.price}
                                            </span>
                                            <span className="text-sm text-gray-500 capitalize">
                                                {product.category}
                                            </span>
                                        </div>
                                        
                                        <button
                                            onClick={() => handleAddToCart(product.id)}
                                            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                                        >
                                            <FiShoppingCart className="w-5 h-5" />
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default ShopPage;