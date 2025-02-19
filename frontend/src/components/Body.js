import React from 'react';
import img1 from '../Assets/img1.png.jpg';
import img2 from '../Assets/img2.png.jpg';
import img5 from '../Assets/img5.png.jpg';
import img6 from '../Assets/img6.png.jpg';
import img7 from '../Assets/img7.png.jpg';
import '../index.css';

const Body = () => {
    return (
        <div>
            {/* Hero Section with Curved Background */}
            <div className="relative bg-white py-16 px-8 overflow-hidden">
                {/* Curved Background Effect */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 rounded-l-full"></div>

                {/* Image & Text Section */}
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Side - Images */}
                    <div className="w-full md:w-1/2">
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
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="w-full md:w-1/2 z-10">
                        <p className="text-green-500 uppercase tracking-widest font-semibold text-sm">
                            Best Brand Cloth Shop
                        </p>
                        <h1 className="text-4xl font-extrabold text-black leading-tight mt-2">
                            We Bring in products <br />
                            that make people's{" "}
                            <span className="text-blue-500">Taste</span> Come to Visual.
                        </h1>
                    </div>
                </div>
            </div>

            {/* Shop by Category Section */}
<div className="Products py-16">
    <div className="container max-w-6xl mx-auto text-center">
        <h1 className="sub-title text-3xl font-bold">Shop by Category</h1>
        <div className="services-list flex flex-wrap justify-center gap-8 mt-8">
            <div className="max-w-xs bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Women</h2>
                <img src={img5} alt="Women Fashion" className="rounded-lg mt-4" />
            </div>
            <div className="max-w-xs bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Men</h2>
                <img src={img6} alt="Men Fashion" className="rounded-lg mt-4" />
            </div>
            <div className="max-w-xs bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Unisex</h2>
                <img src={img7} alt="Unisex Fashion" className="rounded-lg mt-4" />
            </div>
        </div>
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


        </div>
    );
};

export default Body;
