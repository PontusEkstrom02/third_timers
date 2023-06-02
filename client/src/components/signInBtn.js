/*
* This file is a component file for rendering a button for unauthorized users (guests) to sign in and become authorized users. 
* The button is  located on the guest view. 
*/

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
