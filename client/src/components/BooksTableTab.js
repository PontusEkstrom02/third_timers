//The button to change the admin table view from user to books
import { Link } from "react-router-dom";
import "./booksTableTab.css";
export default function booksTableBtn() {
  return (
    <Link to="../AdminBookPage">
      <button className="Book-btn">Books</button>
    </Link>
  );
}
