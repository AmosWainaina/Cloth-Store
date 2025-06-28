import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request for debugging
    console.log('API Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      headers: config.headers,
    });
    
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token refresh and errors
api.interceptors.response.use(
  (response) => {
    // Log successful response for debugging
    console.log('API Response:', {
      status: response.status,
      url: response.config.url,
      data: response.data,
    });
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Log error for debugging
    console.error('API Error:', {
      status: error.response?.status,
      url: error.config?.url,
      message: error.message,
      data: error.response?.data,
    });

    // Handle 401 errors (unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          console.log('Attempting token refresh...');
          const response = await axios.post('http://127.0.0.1:8000/auth/refresh/', {
            refresh: refreshToken,
          });

          const { access } = response.data;
          localStorage.setItem('token', access);

          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${access}`;
          console.log('Token refreshed successfully, retrying request...');
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        // Refresh failed, redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        
        // Only redirect if we're not already on login/register page
        if (!window.location.pathname.includes('/login') && 
            !window.location.pathname.includes('/register')) {
          window.location.href = '/login';
        }
      }
    }

    // Handle network errors
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout');
      error.message = 'Request timeout. Please check your connection.';
    } else if (error.code === 'ERR_NETWORK') {
      console.error('Network error');
      error.message = 'Network error. Please check if the backend server is running.';
    }

    return Promise.reject(error);
  }
);

// Health check function
export const checkBackendHealth = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/', { timeout: 5000 });
    console.log('Backend health check passed:', response.status);
    return true;
  } catch (error) {
    console.error('Backend health check failed:', error.message);
    return false;
  }
};

// Test API endpoints
export const testApiEndpoints = async () => {
  const endpoints = [
    { name: 'Products', url: '/api/products/', method: 'GET', requiresAuth: false },
    { name: 'Cart', url: '/api/cart/', method: 'GET', requiresAuth: true },
    { name: 'Categories', url: '/api/products/categories/', method: 'GET', requiresAuth: false },
  ];

  const results = [];

  for (const endpoint of endpoints) {
    try {
      const config = { method: endpoint.method };
      if (!endpoint.requiresAuth) {
        // Remove auth header for public endpoints
        config.headers = { Authorization: '' };
      }
      
      const response = await api.request({
        url: endpoint.url,
        ...config,
      });
      
      results.push({
        name: endpoint.name,
        status: 'success',
        statusCode: response.status,
      });
    } catch (error) {
      results.push({
        name: endpoint.name,
        status: 'error',
        statusCode: error.response?.status || 'Network Error',
        message: error.message,
      });
    }
  }

  console.log('API Endpoint Test Results:', results);
  return results;
};

export default api;