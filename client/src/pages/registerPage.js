//This file will render a register user view with two input fields for username and password, and a button for register.
import React, { useState } from 'react';
import UsernameInput from '../components/usernameInput';
import PasswordInputReg from '../components/passwordInputReg';
import RegisterBtn from '../components/registerBtn';

function RegisterPage() {
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
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
            <UsernameInput onUsernameChange={handleUsernameChange} />
            </div>
            <div>
            <PasswordInputReg onPasswordChange={handlePasswordChange} />
            </div>
            <RegisterBtn onClick={RegisterBtn}>Register new account</RegisterBtn>
          </form>
        </div>
      );
};

export default RegisterPage;