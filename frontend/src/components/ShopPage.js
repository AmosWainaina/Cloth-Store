import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img1 from '../Assets/img1.png.jpg';
import img2 from '../Assets/img2.png.jpg';
import img3 from  '../Assets/img3.png.jpg';   
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
    },
    {
      id: 2,
      title: 'Product 2',
      price: 22,
      image: img2,
      rating: 4,
    },
    {
      id: 3,
      title: 'product3',
      price: 35,
      image: img11,
      rating: 5,
    },
    {
      id: 4,
      title: 'product4',
      price: 15,
      image: img8,
      rating: 5,
    },
    {
      id: 5,
      title: 'product5',
      price: 45,
      image: img5,
      rating: 5,
    },
    {
      id: 6,
      title: 'product6',
      price: 50,
      image: img6,
      rating: 5,
    },
    {
      id: 7,
      title: 'product7',
      price: 27,
      image: img7,
      rating: 5,
    },
    {
      id: 8,
      title: 'product8',
      price: 15,
      image: img9,
      rating: 5,
    },
    {
      id: 9,
      title: 'product9',
      price: 35,
      image: img3,
      rating: 5,
    },
    {
      id: 10,
      title: 'product01',
      price: 37,
      image: img13,
      rating: 5,
    },
    {
      id: 11,
      title: 'product11',
      price: 32,
      image: img15,
      rating: 5,
    },
  ];

const ShopPage = () => {
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section className="shop-section flex-grow">

      
      <div className="shop-grid">
        {products.map((product) => (
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
            <button className="shop-button">Add to cart</button>
          </div>
        ))}
      </div>
    </section>
            <Footer />
        </div>
    );
};

export default ShopPage ;
