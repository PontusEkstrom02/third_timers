import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginRegisterInput from '../components/loginRegisterInput';
import { Link } from 'react-router-dom';
import Headertab from '../components/headertab'

function RegisterPage() {
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
    fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === undefined){
          alert("Username already in use")
        }
        else{
          alert(data.message)
          navigate('../');
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <>
      <Headertab />
      <main>
        <h2>Register</h2>
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
            Already have an account? Sign in <Link to="../">here!</Link>{' '}
          </small>
          <button type="submit">Register new account</button>
        </form>
      </main>
    </>
  );
}

export default RegisterPage;