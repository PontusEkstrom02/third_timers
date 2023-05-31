/*
 * This file is a component that handles and makes the different types of headers that the pages needs.
 * Its a vary slopy but easy solution on how to return different headers but it works for now.
 * the main way to fix the if statements and repitition is by having if statements inside the return.
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
      <header>
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
      <header>
        <h1>Booksters website</h1>
        <div>
          <small>Browsing as user {name}</small>
          <Link to="../">
            <button onClick={handleLogout}>Sign out</button>
          </Link>
        </div>
      </header>
    );
  } else if (role === "ADMIN") {
    return (
      <header>
        <h1>Booksters website</h1>
        <div>
          <small>Browsing as admin {name}</small>
          <Link to="../">
            <button onClick={handleLogout}>Sign out</button>
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <h1>Booksters website</h1>
      </header>
    );
  }
}
