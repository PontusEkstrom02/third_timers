import React, { useState } from 'react';

const PasswordInputReg = ({ onPasswordChange }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    onPasswordChange(newPassword);
  };

  return (
    <div>
      <label>
        Password
        <input
          type="text"
          name="password"
          data-testid="password-field"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter a password..."
        />
      </label>
    </div>
  );
};

export default PasswordInputReg;