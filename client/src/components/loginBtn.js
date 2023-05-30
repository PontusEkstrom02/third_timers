//a login button
import React from "react";

function LoginBtn({onClick}) {
  return (
    <button onClick={onClick} type="submit" name="login">
      Sign in
    </button>
  );
}

export default LoginBtn;
