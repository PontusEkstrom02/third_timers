//A button to log in as a guest
import React from "react";

const GuestBtn = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default GuestBtn;