import React, { useState } from "react";
import "./Auth.css";
import SignUpPage from "./SignUpPage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Simulate a login request
    try {
      const response = await fakeLoginApi(email, password);
      if (response.success) {
        // Handle successful login (e.g., redirect to dashboard)
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const fakeLoginApi = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: email === "test@example.com" && password === "password" });
      }, 1000);
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p className="auth-footer">
          Don't have an account? <button onClick={openModal} className="sign-up-button">Sign up</button>
        </p>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <SignUpPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
