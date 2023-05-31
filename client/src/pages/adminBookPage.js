import React, { useState } from 'react';
import BooksTable from "../components/booksTable";
import SearchBar from "../components/searchBar";
import BooksTableTab from "../components/booksTableTab"
import UserTableTab from "../components/userTableTab"
import AddNewBookBtn from '../components/addNewBookBtn';

import Headertab from '../components/headertab'
function AdminBookPage() {
  const [search, setSearch] = useState('');
  const handleAddbtn = (event) => {
  event.preventDefault();
  };

  return (
    <>
      <Headertab role="ADMIN"/>
      <main className="adminBookPage-container">
        <SearchBar placeholder="Search query..." onChange={event => setSearch(event.target.value)} />
        <BooksTableTab />
        <UserTableTab />
        <button type="submit" onClick={handleAddbtn}>
          Add new book
        </button>
          <BooksTable search={search} role="admin"/>
      </main>
    </>
  );
}

export default AdminBookPage;

