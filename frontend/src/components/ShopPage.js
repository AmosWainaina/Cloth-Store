import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FiFilter, FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../api';
import '../index.css';

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [priceFilter, setPriceFilter] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [loading, setLoading] = useState(true);
    const [addingToCart, setAddingToCart] = useState({});
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [products, categoryFilter, priceFilter, sortBy]);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/api/products/');
            console.log('Products fetched:', response.data);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            toast.error('Failed to load products');
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
        if (!isAuthenticated) {
            toast.error('Please login to add items to cart');
            return;
        }

        setAddingToCart(prev => ({ ...prev, [productId]: true }));
        
        try {
            const success = await addToCart(productId, 1);
            if (success) {
                toast.success('Item added to cart successfully!');
            }
        } catch (error) {
            toast.error('Failed to add item to cart');
        } finally {
            setAddingToCart(prev => ({ ...prev, [productId]: false }));
        }
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FiStar
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg">Loading amazing products...</p>
                    </div>
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
                        <div className="mt-8">
                            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-lg">
                                {products.length} Products Available
                            </span>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white shadow-sm border-b sticky top-16 z-40">
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
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                                >
                                    <option value="all">All Categories</option>
                                    <option value="men">Men's Wear</option>
                                    <option value="women">Women's Wear</option>
                                    <option value="unisex">Unisex</option>
                                </select>

                                <select
                                    value={priceFilter}
                                    onChange={(e) => setPriceFilter(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                                >
                                    <option value="all">All Prices</option>
                                    <option value="0-50">$0 - $50</option>
                                    <option value="50-100">$50 - $100</option>
                                    <option value="100-200">$100 - $200</option>
                                    <option value="200">$200+</option>
                                </select>

                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
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
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
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
                        {categoryFilter !== 'all' && (
                            <p className="text-gray-600 mt-2">
                                Showing {categoryFilter} products
                            </p>
                        )}
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="max-w-md mx-auto">
                                <FiShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-500 text-lg mb-6">
                                    No products match your current filters. Try adjusting your search criteria.
                                </p>
                                <button
                                    onClick={() => {
                                        setCategoryFilter('all');
                                        setPriceFilter('all');
                                        setSortBy('name');
                                    }}
                                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                    <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                e.target.src = 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400';
                                            }}
                                        />
                                        <div className="absolute top-4 right-4">
                                            <button className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200">
                                                <FiHeart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                                            </button>
                                        </div>
                                        {product.stock < 10 && (
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                    Only {product.stock} left
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="mb-2">
                                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                                {product.category}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
                                            {product.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {product.description}
                                        </p>
                                        
                                        <div className="flex items-center mb-3">
                                            <div className="flex items-center space-x-1">
                                                {renderStars(product.rating)}
                                            </div>
                                            <span className="ml-2 text-sm text-gray-600">({product.rating}.0)</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-2xl font-bold text-green-600">
                                                {formatPrice(product.price)}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {product.stock} in stock
                                            </span>
                                        </div>
                                        
                                        <button
                                            onClick={() => handleAddToCart(product.id)}
                                            disabled={addingToCart[product.id] || product.stock === 0}
                                            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {addingToCart[product.id] ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                    <span>Adding...</span>
                                                </>
                                            ) : product.stock === 0 ? (
                                                <span>Out of Stock</span>
                                            ) : (
                                                <>
                                                    <FiShoppingCart className="w-5 h-5" />
                                                    <span>Add to Cart</span>
                                                </>
                                            )}
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