/*
* This file is a component file for rendering a button on which an administrator can change the table view from user to books.
*/

import { Link } from "react-router-dom";
import "./booksTableTab.css";
export default function booksTableBtn() {
  return (
    <Link to="../AdminBookPage">
      <button className="Book-btn">Books</button>
    </Link>
  );
}
