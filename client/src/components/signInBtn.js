//A button for non sign in members (guest) to get to the sign in page
import React from "react";

function signInBtn() {
  const handleSubmitBtn = (e) => {
    e.preventDefault();
  };
  return (
    <button name="signIn" onClick={handleSubmitBtn}>
      Sign in
    </button>
  );
}

export default signInBtn;
