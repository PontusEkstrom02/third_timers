import React, { useState } from 'react';

const PasswordInput = ({ onPasswordChange }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    onPasswordChange(newPassword);
  };

  return (
    <div>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Type your password..."
        />
      </label>
    </div>
  );
};

export default PasswordInput;
