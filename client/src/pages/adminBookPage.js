import React from "react";
import BooksTable from "../components/booksTable";
function AdminBookPage() {
  const handleAddbtn = (event) => {
    event.preventDefault();
  };

  return (
    <div className="adminBookPage-container">
      <input
        type="text"
        placeholder="Search for a book"
        name="searchInput"
        autoComplete="off"
      ></input>
      <button type="submit" onClick={handleAddbtn}>
        Add new book
      </button>
      <table>
        <BooksTable />
      </table>
    </div>
  );
}

export default AdminBookPage;
