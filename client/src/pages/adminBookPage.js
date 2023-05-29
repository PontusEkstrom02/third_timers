import React, { useState } from 'react';
import BooksTable from "../components/booksTable";
import SearchBar from "../components/searchBar";
function AdminBookPage() {
  const [search, setSearch] = useState('');
  const handleAddbtn = (event) => {
    event.preventDefault();
  };

  return (
    <div className="adminBookPage-container">
      <SearchBar
        placeholder="Search query..."
        onChange={event => setSearch(event.target.value)}
      />
      <button type="submit" onClick={handleAddbtn}>
        Add new book
      </button>
      <table>
        <BooksTable search={search} role="admin"/>
      </table>
    </div>
  );
}

export default AdminBookPage;
