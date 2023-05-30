import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GuestBtn from '../components/guestUserBtn';
import LoginRegisterInput from '../components/loginRegisterInput';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', username, password);

    // Prepare the data to be sent in the request body
    const userData = {
      username: username,
      password: password,
    };

    // Make a POST request to the backend API
    fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === undefined) {
          alert("Failed to log in");
        } else {
          localStorage.setItem('token', data.accessToken);
          alert(data.message);
          // Navigate to the login page
          navigate('/UserPage');
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <strong>Username</strong>
          <LoginRegisterInput placeholder={"Type your username..."} onChange={handleUsernameChange} />
        </div>
        <div>
          <strong>Password</strong>
          <LoginRegisterInput placeholder={"Type your password..."} onChange={handlePasswordChange} />
        </div>
        <small>
          No account? Sign up <Link to="/RegisterPage">here!</Link>{' '}
        </small>
        <button type="submit">Sign in</button>
      </form>
      <GuestBtn />
    </div>
  );
}

export default LoginPage;

