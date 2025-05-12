import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import img1 from '../Assets/img1.png.jpg';
import img2 from '../Assets/img2.png.jpg';
import img3 from '../Assets/img3.png.jpg';   
import img5 from '../Assets/img5.png.jpg';
import img6 from '../Assets/img6.png.jpg';
import img7 from '../Assets/img7.png.jpg';
import img8 from '../Assets/img8.png.jpg';
import img9 from '../Assets/img9.png.jpg';
import img13 from '../Assets/img13.png.jpg';
import img11 from '../Assets/img11.png.jpg';
import img15 from '../Assets/img15.png.jpg';
import '../index.css';

const products = [
    {
        id: 1,
        title: 'Pro Package',
        price: 18,
        image: img1,
        rating: 5,
        category: 'men',
    },
    {
        id: 2,
        title: 'Beach Wear',
        price: 22,
        image: img2,
        rating: 4,
        category: 'men',
    },
    {
        id: 3,
        title: 'Top combo',
        price: 35,
        image: img11,
        rating: 5,
        category: 'women',
    },
    {
        id: 4,
        title: 'All Top',
        price: 15,
        image: img8,
        rating: 5,
        category: 'women',
    },
    {
        id: 5,
        title: 'outdoor',
        price: 45,
        image: img5,
        rating: 5,
        category: 'men',
    },
    {
        id: 6,
        title: 'Women Skirt',
        price: 50,
        image: img6,
        rating: 5,
        category: 'women',
    },
    {
        id: 7,
        title: 'Men casual',
        price: 27,
        image: img7,
        rating: 5,
        category: 'men',
    },
    {
        id: 8,
        title: 'Top Accessory',
        price: 15,
        image: img9,
        rating: 5,
        category: 'women',
    },
    {
        id: 9,
        title: 'Women Top',
        price: 35,
        image: img3,
        rating: 5,
        category: 'women',
    },
    {
        id: 10,
        title: 'Men Elegance',
        price: 37,
        image: img13,
        rating: 5,
        category: 'men',
    },
    {
        id: 11,
        title: 'Men outdoor',
        price: 32,
        image: img15,
        rating: 5,
        category: 'men',
    },
];

const ShopPage = () => {
    const [cart, setCart] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [priceFilter, setPriceFilter] = useState('all');

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const filteredProducts = products.filter((product) => {
        // Category filter
        const categoryMatch = 
            categoryFilter === 'all' || 
            product.category === categoryFilter;
        
        // Price filter
        let priceMatch = true;
        if (priceFilter === '0-50') {
            priceMatch = product.price <= 50;
        } else if (priceFilter === '50-100') {
            priceMatch = product.price > 50 && product.price <= 100;
        } else if (priceFilter === '100+') {
            priceMatch = product.price > 100;
        }
        
        return categoryMatch && priceMatch;
    });

    return (
        <div className="flex flex-col min-h-screen">
            <Header cartCount={cart.length} />
            <section className="shop-section flex-grow">
                {/* Filter controls */}
                <div className="filter-controls p-4 bg-gray-100 mb-6 flex flex-wrap gap-4 justify-center">
                    <div className="filter-group">
                        <label htmlFor="category" className="mr-2 font-medium">Category:</label>
                        <select
                            id="category"
                            className="p-2 border rounded"
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="men">Men's Wear</option>
                            <option value="women">Women's Wear</option>
                        </select>
                    </div>
                    
                    <div className="filter-group">
                        <label htmlFor="price" className="mr-2 font-medium">Price Range:</label>
                        <select
                            id="price"
                            className="p-2 border rounded"
                            value={priceFilter}
                            onChange={(e) => setPriceFilter(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="0-50">$0 - 15</option>
                            <option value="50-100">$16 - $40</option>
                            
                        </select>
                    </div>
                    
                    <button
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        onClick={() => {
                            setCategoryFilter('all');
                            setPriceFilter('all');
                        }}
                    >
                        Reset Filters
                    </button>
                </div>

                {/* Products grid */}
                <div className="shop-grid">
                    {filteredProducts.map((product) => (
                        <div className="shop-card" key={product.id}>
                            <div className="shop-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="shop-details">
                                <h3>{product.title}</h3>
                                <div className="shop-price-rating">
                                    <span className="shop-price">${product.price}</span>
                                    <div className="shop-rating">
                                        {Array(product.rating).fill('★').join('')}
                                    </div>
                                </div>
                            </div>
                            <button 
                                className="shop-button"
                                onClick={() => addToCart(product)}
                            >
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ShopPage;