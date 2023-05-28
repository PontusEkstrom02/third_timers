import React, { useState } from 'react';

const UsernameInput = ({ onUsernameChange }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    onUsernameChange(newUsername);
  };

  return (
    <div>
      <label>
        Username:
        <input
          type="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Type your username..."
        />
      </label>
    </div>
  );
};

export default UsernameInput;
