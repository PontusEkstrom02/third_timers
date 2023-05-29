//A button to log in as a guest
import { Link } from "react-router-dom";
const GuestBtn = () => {
  return (
    <>
     <small>No account? Sign up <Link to="RegisterPage">here!</Link></small>
    </>
  );
};

export default GuestBtn;