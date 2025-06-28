import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const fetchCart = async () => {
    if (!isAuthenticated) return;
    
    try {
      setLoading(true);
      const response = await api.get('/api/cart/');
      if (response.data.length > 0) {
        setCart(response.data[0]);
      } else {
        setCart({ items: [], total_price: 0, total_items: 0 });
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchCart();
    } else {
      setCart(null);
    }
  }, [isAuthenticated]);

  const addToCart = async (productId, quantity = 1) => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      return false;
    }

    try {
      await api.post('/api/cart/add_item/', {
        product_id: productId,
        quantity: quantity
      });
      await fetchCart();
      toast.success('Item added to cart');
      return true;
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Failed to add item to cart';
      toast.error(errorMsg);
      return false;
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      await api.post('/api/cart/update_item/', {
        product_id: productId,
        quantity: quantity
      });
      await fetchCart();
      return true;
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Failed to update item';
      toast.error(errorMsg);
      return false;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await api.delete('/api/cart/remove_item/', {
        data: { product_id: productId }
      });
      await fetchCart();
      toast.success('Item removed from cart');
      return true;
    } catch (error) {
      toast.error('Failed to remove item');
      return false;
    }
  };

  const clearCart = async () => {
    try {
      await api.delete('/api/cart/clear/');
      await fetchCart();
      toast.success('Cart cleared');
      return true;
    } catch (error) {
      toast.error('Failed to clear cart');
      return false;
    }
  };

  const value = {
    cart,
    loading,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    fetchCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};