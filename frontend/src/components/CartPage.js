import React from 'react';
import Header from './Header';
import Footer from './Footer';
import emptyCartImg from '../Assets/empty-cart.png';
import '../index.css';

const CartPage = () => {
  
    
  // If you have actual cart data, you can conditionally check its length.
  const cartItems = []; // Example empty array

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        {/* Check if cartItems is empty */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow">
            <img
              src={emptyCartImg}
              alt="Empty Cart"
              className="w-40 h-auto mb-4" // Tailwind classes for width/height
            />
            <h2 className="text-xl font-semibold mb-2">
              Looks like your cart is empty!
            </h2>
            <p className="text-gray-600">Time to start your shopping</p>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Render cart items here if not empty */}
            {/* Example:
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
            */}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
