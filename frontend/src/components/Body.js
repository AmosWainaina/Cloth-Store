import React from 'react';
import img1 from '../Assets/img1.png.jpg';
import img2 from '../Assets/img2.png.jpg';
import img5 from '../Assets/img5.png.jpg';
import img6 from '../Assets/img6.png.jpg';
import img7 from '../Assets/img7.png.jpg';
import '../index.css';

const Body = () => {
    return (
        <div className="body-container">
            {/* Image Section */}
            <div className="main-container">
                <div className="box left">
                    <img src={img2} alt="Latest Trendy Styles for Men" />
                    <p>Latest Trendy Styles for Men</p>
                </div>
                <div className="box right">
                    <img src={img1} alt="Elegant & Stylish Women's Collection" />
                    <p>Elegant & Stylish Women's Collection</p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="services">
                <div className="container">
                    <h1 className="sub-title">Why Choose Us</h1>
                    <div className="services-list">
                        <div>
                            <i className="fa-solid fa-truck-fast"></i>
                            <h2>Shipping</h2>
                            <p>Free shipping on all orders over $50, and arrival within 3-5 business days.</p>
                        </div>

                        <div>
                            <i className="fa-solid fa-receipt"></i>
                            <h2>Availability</h2>
                            <p>Available 24/7, 365 days a year, with new products added daily.</p>
                        </div>

                        <div>
                            <i className="fa-solid fa-medal"></i>
                            <h2>Warranty</h2>
                            <p>Extended warranty on all products, 30-day money-back guarantee.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shop by Category Section */}
            <div className="Products">
                <div className="container">
                    <h1 className="sub-title">Shop by Category</h1>
                    <div className="services-list">
                        <div>
                            <h2>Women</h2>
                            <img src={img5} alt="Women Fashion" />
                        </div>

                        <div>
                            <h2>Men</h2>
                            <img src={img6} alt="Men Fashion" />
                        </div>

                        <div>
                            <h2>Unisex</h2>
                            <img src={img7} alt="Unisex Fashion" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;
