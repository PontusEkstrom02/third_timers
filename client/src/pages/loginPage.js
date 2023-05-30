//This file will render a login view with two input fields for username and password, and two buttons for login and guest user view.
import React, { useState } from 'react';
import LoginBtn from '../components/loginBtn';
import GuestBtn from '../components/guestUserBtn';
import UsernameInput from '../components/loginRegisterInput';
import PasswordInput from '../components/passwordInput';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', username, password);

    };

    return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <UsernameInput onUsernameChange={handleUsernameChange} />
            </div>
            <div>
              <PasswordInput onPasswordChange={handlePasswordChange} />
            </div>
            <small>Already have an account? Sign up <Link to="/RegisterPage">here!</Link> </small>
            <LoginBtn onClick={LoginBtn}>Sign in</LoginBtn>
            <GuestBtn />
          </form>
        </div>
      );
};

export default LoginPage;