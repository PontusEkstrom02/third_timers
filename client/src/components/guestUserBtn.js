//A button to log in as a guest
import { Link } from "react-router-dom";
const GuestBtn = () => {
  return (
    <>
    <Link to="/GuestPage">
      <button>Proceed as guest user</button>
    </Link>
    </>
  );
};

export default GuestBtn;