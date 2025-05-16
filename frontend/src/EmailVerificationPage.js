import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import './Auth.css';

const EmailVerificationPage = () => {
  const { key } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Verifying your email...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await api.get(`/auth/verify-email/${key}/`);
        setMessage('Email verified successfully! Redirecting to login...');
        setTimeout(() => navigate('/login'), 3000);
      } catch (err) {
        console.error('Verification error:', err);
        setError(err.response?.data?.detail || 'Verification failed');
        setMessage(null);
      }
    };

    verifyEmail();
  }, [key, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Email Verification</h2>
        <div className="verification-message">
          {message && <p>{message}</p>}
          {error && (
            <>
              <p className="error-message">{error}</p>
              <button 
                className="auth-button"
                onClick={() => navigate('/signup')}
              >
                Back to Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;