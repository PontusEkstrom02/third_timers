import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GuestBtn from "../components/guestUserBtn";
import LoginRegisterInput from "../components/loginRegisterInput";
import { Link } from "react-router-dom";
import Headertab from "../components/headertab";
import "./loginPage.css";

import "../index.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data to be sent in the request body
    const userData = {
      username: username,
      password: password,
    };

    // Make a POST request to the backend API
    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === undefined) {
          alert("Failed to log in");
        } else {
          localStorage.setItem("token", data.accessToken);
          alert(data.message);
          // Navigate to the login page
          console.log(data);
          routing();
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };
  // sends the user to the right page
  const routing = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3001/library/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user.role === "ADMIN") {
          navigate("/AdminBookPage");
        } else {
          navigate("/UserPage");
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

      <main className="centered-box">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong>Username</strong>
              <LoginRegisterInput
                placeholder={"Type your username..."}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <strong>Password</strong>
              <LoginRegisterInput
                placeholder={"Type your password..."}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="small-text">
              <small>
                No account? Sign up <Link to="/RegisterPage">here!</Link>{" "}
              </small>
            </div>
            <div className="button-container">
              <button type="submit" className="sign-in-button">
                Sign in
              </button>
            </div>
          </form>
          <GuestBtn />
        </div>
      </main>
    </>
  );
}

export default LoginPage;
