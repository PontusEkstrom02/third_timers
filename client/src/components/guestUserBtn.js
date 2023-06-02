/*
* This file is a component file for rendering a button on the login page on which one can choose to browse as unauthorized user or guest. 
*/

import { Link } from "react-router-dom";
const GuestBtn = () => {
  return (
    <>
    <Link to="/GuestPage">
      <button className='guest-button'>Proceed as guest user</button>
    </Link>
    </>
  );
};

export default GuestBtn;