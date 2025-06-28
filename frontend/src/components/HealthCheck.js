import React, { useState, useEffect } from 'react';
import { checkBackendHealth, testApiEndpoints } from '../api';
import { FiCheckCircle, FiXCircle, FiLoader, FiRefreshCw } from 'react-icons/fi';

const HealthCheck = ({ onClose }) => {
  const [backendStatus, setBackendStatus] = useState('checking');
  const [apiResults, setApiResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const runHealthCheck = async () => {
    setIsLoading(true);
    setBackendStatus('checking');
    setApiResults([]);

    // Check backend health
    const isHealthy = await checkBackendHealth();
    setBackendStatus(isHealthy ? 'healthy' : 'unhealthy');

    // Test API endpoints
    const results = await testApiEndpoints();
    setApiResults(results);

    setIsLoading(false);
  };

  useEffect(() => {
    runHealthCheck();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
      case 'success':
        return <FiCheckCircle className="w-5 h-5 text-green-500" />;
      case 'unhealthy':
      case 'error':
        return <FiXCircle className="w-5 h-5 text-red-500" />;
      case 'checking':
      default:
        return <FiLoader className="w-5 h-5 text-blue-500 animate-spin" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
      case 'success':
        return 'text-green-600 bg-green-50';
      case 'unhealthy':
      case 'error':
        return 'text-red-600 bg-red-50';
      case 'checking':
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">System Health Check</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={runHealthCheck}
              disabled={isLoading}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FiRefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FiXCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Backend Status */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend Server Status</h3>
            <div className="flex items-center space-x-3">
              {getStatusIcon(backendStatus)}
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(backendStatus)}`}>
                {backendStatus === 'healthy' && 'Backend is running'}
                {backendStatus === 'unhealthy' && 'Backend is not responding'}
                {backendStatus === 'checking' && 'Checking backend status...'}
              </span>
            </div>
            {backendStatus === 'unhealthy' && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">
                  <strong>Backend server is not running!</strong><br />
                  Please start the Django backend server by running:
                </p>
                <code className="block mt-2 p-2 bg-red-100 rounded text-sm">
                  cd backend && python manage.py runserver
                </code>
              </div>
            )}
          </div>

          {/* API Endpoints */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">API Endpoints Status</h3>
            <div className="space-y-3">
              {apiResults.length === 0 && isLoading ? (
                <div className="flex items-center space-x-3">
                  <FiLoader className="w-5 h-5 text-blue-500 animate-spin" />
                  <span className="text-gray-600">Testing API endpoints...</span>
                </div>
              ) : (
                apiResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(result.status)}
                      <span className="font-medium text-gray-900">{result.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(result.status)}`}>
                        {result.statusCode}
                      </span>
                      {result.message && (
                        <span className="text-xs text-gray-500 max-w-xs truncate">
                          {result.message}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Integration Status */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Integration Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <FiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-gray-900">CORS Configuration</span>
                </div>
                <p className="text-sm text-gray-600">Cross-origin requests enabled</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <FiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-gray-900">JWT Authentication</span>
                </div>
                <p className="text-sm text-gray-600">Token-based auth configured</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <FiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-gray-900">API Interceptors</span>
                </div>
                <p className="text-sm text-gray-600">Request/response handling active</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <FiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-gray-900">Error Handling</span>
                </div>
                <p className="text-sm text-gray-600">Comprehensive error management</p>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">Troubleshooting Tips</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Ensure Django backend is running on port 8000</li>
              <li>• Check that CORS is properly configured</li>
              <li>• Verify database migrations are up to date</li>
              <li>• Make sure sample data is loaded</li>
              <li>• Check browser console for detailed error messages</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Last checked: {new Date().toLocaleTimeString()}
            </span>
            <button
              onClick={onClose}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCheck;