import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import emptyCartImg from '../Assets/empty-cart.png';
import '../index.css';
import api from '../api';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await api.get('/cart/');
        if (response.data.length > 0) {
          const cart = response.data[0];
          setCartId(cart.id);
          setCartItems(cart.items);
        } else {
          // Create a new cart if none exists
          const createResponse = await api.post('/cart/', {});
          setCartId(createResponse.data.id);
          setCartItems([]);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow">
            <img
              src={emptyCartImg}
              alt="Empty Cart"
              className="w-40 h-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              Looks like your cart is empty!
            </h2>
            <p className="text-gray-600">Time to start your shopping</p>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.product.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
