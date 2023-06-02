/*
* This file is a component file for rendering a login button on the login page.
*/
import React from "react";

function LoginBtn({onClick}) {
  return (
    <button onClick={onClick} type="submit" name="login">
      Sign in
    </button>
  );
}

export default LoginBtn;
