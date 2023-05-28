//a login button
import React from "react";

const LoginBtn = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default LoginBtn;
