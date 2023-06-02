/*
* This file is a component file for rendering a button on which an administrator can change the table view from books to users.
*/
import { Link } from "react-router-dom";
import "./userTableTab.css";
export default function userTableBtn() {
  return (
    <Link to="../AdminUserPage">
      <button className="AddNewBook-btn">Users</button>
    </Link>
  );
}
