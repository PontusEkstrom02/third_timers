import React, { useState } from 'react';
import BooksTable from "../components/booksTable";
import SearchBar from "../components/searchBar";
import BooksTableTab from "../components/booksTableTab"
import UserTableTab from "../components/userTableTab"
import AddNewBookBtn from '../components/addNewBookBtn';

function AdminBookPage() {
  const [search, setSearch] = useState('');
  const handleAddbtn = (event) => {
  event.preventDefault();
  };

  return (
    <div className="adminBookPage-container">
      <SearchBar placeholder="Search query..." onChange={event => setSearch(event.target.value)} />
      <BooksTableTab />
      <UserTableTab />
      <AddNewBookBtn />
      <button type="submit" onClick={handleAddbtn}>
        Add new book
      </button>
        <BooksTable search={search} role="admin"/>
    </div>
  );
}

export default AdminBookPage;

