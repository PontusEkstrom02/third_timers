/*
 * This file is a component file that renders and handles the different types of headers of each view or page.
 * Its a somewhat sloppy solution for and has a lot of room for improvement.
 * One way of improvement can be to fix the if statements and the repetition by having if statements inside the return.
*/

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header({ role }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (role === "USER" || role === "ADMIN") {
      const token = localStorage.getItem("token");
      fetch("http://localhost:3001/library/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setName(data.user.username);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [role]);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  if (role === "GUEST") {
    return (
      <header className="header-box">
        <h1>Booksters website</h1>
        <div>
          <small>Browsing as guest...</small>
          <Link to="../">
            <button>Sign in</button>
          </Link>
        </div>
      </header>
    );
  } else if (role === "USER") {
    return (
      <header className="header-box">
        <h1>Booksters website</h1>

        <div className="link-tabs">
          <small>Browsing as user {name}</small>
          <Link to="../">
            <button onClick={handleLogout}>Sign out</button>
          </Link>
        </div>
      </header>
    );
  } else if (role === "ADMIN") {
    return (
      <header className="header-box">
        <h1>Booksters website</h1>
        <div className="tab-links">
          <small>Browsing as admin {name}</small>
          <Link to="../">
            <button className="SignIn-btn" onClick={handleLogout}>
              Sign out
            </button>
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header-box">
        <h1>Booksters website</h1>
      </header>
    );
  }
}
