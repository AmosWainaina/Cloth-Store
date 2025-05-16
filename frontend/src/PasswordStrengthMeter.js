import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = testResult.score * 25;
  
  const createPassLabel = () => {
    switch(testResult.score) {
      case 0: return 'Very weak';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0: return '#ff0000';
      case 1: return '#ff4500';
      case 2: return '#ffa500';
      case 3: return '#9acd32';
      case 4: return '#008000';
      default: return 'none';
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '5px',
    borderRadius: '3px',
    transition: 'all 0.3s ease'
  });

  return (
    <div className="password-strength-meter">
      <div className="strength-bar" style={changePasswordColor()}></div>
      <div className="strength-info">
        <p className="strength-label">
          {password && (
            <>
              <strong>Strength:</strong> {createPassLabel()}
              {testResult.feedback.suggestions.length > 0 && (
                <span className="strength-suggestion">
                  {testResult.feedback.suggestions[0]}
                </span>
              )}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;