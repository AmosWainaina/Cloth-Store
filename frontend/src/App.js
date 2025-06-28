import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { checkBackendHealth } from './api';
import HealthCheck from './components/HealthCheck';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import { FiAlertTriangle } from 'react-icons/fi';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showHealthCheck, setShowHealthCheck] = useState(false);
  const [backendStatus, setBackendStatus] = useState('checking');

  useEffect(() => {
    // Check backend health on app load
    const checkHealth = async () => {
      const isHealthy = await checkBackendHealth();
      setBackendStatus(isHealthy ? 'healthy' : 'unhealthy');
      
      if (!isHealthy) {
        toast.error(
          'Backend server is not responding. Please start the Django server.',
          { 
            position: 'top-center',
            autoClose: false,
            closeOnClick: false,
            draggable: false,
          }
        );
      }
    };

    checkHealth();
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="App min-h-screen bg-gray-50">
            {/* Backend Status Banner */}
            {backendStatus === 'unhealthy' && (
              <div className="bg-red-600 text-white px-4 py-3 text-center relative">
                <div className="flex items-center justify-center space-x-2">
                  <FiAlertTriangle className="w-5 h-5" />
                  <span className="font-medium">
                    Backend server is not running. Some features may not work.
                  </span>
                  <button
                    onClick={() => setShowHealthCheck(true)}
                    className="underline hover:no-underline ml-2"
                  >
                    Check Status
                  </button>
                </div>
              </div>
            )}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>

            {/* Health Check Modal */}
            {showHealthCheck && (
              <HealthCheck onClose={() => setShowHealthCheck(false)} />
            )}

            {/* Toast Container */}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              className="mt-16"
            />

            {/* Development Tools */}
            {process.env.NODE_ENV === 'development' && (
              <div className="fixed bottom-4 right-4 z-50">
                <button
                  onClick={() => setShowHealthCheck(true)}
                  className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200"
                  title="System Health Check"
                >
                  <FiAlertTriangle className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;