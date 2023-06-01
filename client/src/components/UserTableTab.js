//The buttom to change the admin table view from books to user
import { Link } from "react-router-dom";
import "./userTableTab.css";
export default function userTableBtn() {
  return (
    <Link to="../AdminUserPage">
      <button className="AddNewBook-btn">Users</button>
    </Link>
  );
}
