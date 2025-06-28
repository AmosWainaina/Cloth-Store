import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FiFilter, FiStar, FiShoppingCart, FiHeart, FiSearch, FiGrid, FiList } from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../api';
import '../index.css';

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [priceFilter, setPriceFilter] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [loading, setLoading] = useState(true);
    const [addingToCart, setAddingToCart] = useState({});
    const [wishlist, setWishlist] = useState(new Set());
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    useEffect(() => {
        fetchProducts();
        
        // Check for category parameter in URL
        const urlParams = new URLSearchParams(location.search);
        const categoryParam = urlParams.get('category');
        if (categoryParam) {
            setCategoryFilter(categoryParam);
        }
    }, [location]);

    useEffect(() => {
        filterProducts();
    }, [products, categoryFilter, priceFilter, sortBy, searchTerm]);

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

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

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
                case 'newest':
                    return new Date(b.created_at) - new Date(a.created_at);
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

    const toggleWishlist = (productId) => {
        const newWishlist = new Set(wishlist);
        if (newWishlist.has(productId)) {
            newWishlist.delete(productId);
            toast.info('Removed from wishlist');
        } else {
            newWishlist.add(productId);
            toast.success('Added to wishlist');
        }
        setWishlist(newWishlist);
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

    const clearAllFilters = () => {
        setCategoryFilter('all');
        setPriceFilter('all');
        setSortBy('name');
        setSearchTerm('');
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
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Fashion Collection</h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-8">Discover the latest trends in fashion</p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <div className="relative">
                                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full text-lg font-medium">
                                {filteredProducts.length} Products Available
                            </span>
                        </div>
                    </div>
                </div>

                {/* Filters and Controls */}
                <div className="bg-white shadow-sm border-b sticky top-20 z-40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            {/* Filters */}
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center space-x-2">
                                    <FiFilter className="text-gray-500" />
                                    <span className="font-medium text-gray-700">Filters:</span>
                                </div>
                                
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
                                    <option value="0-20">$0 - $20</option>
                                    <option value="21-40">$21 - $40</option>
                                    <option value="41-50">$41 - $50</option>
                                    <option value="51">$51+</option>
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
                                    <option value="newest">Newest First</option>
                                </select>

                                <button
                                    onClick={clearAllFilters}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
                                >
                                    Clear All
                                </button>
                            </div>

                            {/* View Mode Toggle */}
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">View:</span>
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        viewMode === 'grid' 
                                            ? 'bg-green-100 text-green-600' 
                                            : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                >
                                    <FiGrid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        viewMode === 'list' 
                                            ? 'bg-green-100 text-green-600' 
                                            : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                >
                                    <FiList className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
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
                        {searchTerm && (
                            <p className="text-gray-600 mt-2">
                                Search results for "{searchTerm}"
                            </p>
                        )}
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="max-w-md mx-auto">
                                <FiShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h3>
                                <p className="text-gray-500 text-lg mb-8">
                                    No products match your current filters. Try adjusting your search criteria.
                                </p>
                                <button
                                    onClick={clearAllFilters}
                                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className={
                            viewMode === 'grid' 
                                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                                : "space-y-6"
                        }>
                            {filteredProducts.map((product) => (
                                viewMode === 'grid' ? (
                                    // Grid View
                                    <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
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
                                                <button 
                                                    onClick={() => toggleWishlist(product.id)}
                                                    className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200 shadow-md"
                                                >
                                                    <FiHeart className={`w-5 h-5 ${wishlist.has(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                                                </button>
                                            </div>
                                            {product.stock < 10 && product.stock > 0 && (
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                        Only {product.stock} left
                                                    </span>
                                                </div>
                                            )}
                                            {product.stock === 0 && (
                                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium">
                                                        Out of Stock
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="p-6">
                                            <div className="mb-2">
                                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded-full">
                                                    {product.category}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
                                                {product.title}
                                            </h3>
                                            
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                {product.description}
                                            </p>
                                            
                                            <div className="flex items-center mb-4">
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
                                                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
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
                                ) : (
                                    // List View
                                    <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="relative md:w-64 h-48 md:h-auto overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                    onError={(e) => {
                                                        e.target.src = 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400';
                                                    }}
                                                />
                                                {product.stock < 10 && product.stock > 0 && (
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                            Only {product.stock} left
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="flex-1 p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="flex-1">
                                                        <div className="mb-2">
                                                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded-full">
                                                                {product.category}
                                                            </span>
                                                        </div>
                                                        
                                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors duration-200">
                                                            {product.title}
                                                        </h3>
                                                        
                                                        <p className="text-gray-600 mb-4">
                                                            {product.description}
                                                        </p>
                                                        
                                                        <div className="flex items-center mb-4">
                                                            <div className="flex items-center space-x-1">
                                                                {renderStars(product.rating)}
                                                            </div>
                                                            <span className="ml-2 text-sm text-gray-600">({product.rating}.0)</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <button 
                                                        onClick={() => toggleWishlist(product.id)}
                                                        className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                                                    >
                                                        <FiHeart className={`w-5 h-5 ${wishlist.has(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                                                    </button>
                                                </div>
                                                
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4">
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
                                                        className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                                        </div>
                                    </div>
                                )
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