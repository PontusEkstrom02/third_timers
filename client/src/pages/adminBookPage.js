import React, { useState } from "react";
import BooksTable from "../components/booksTable";
import SearchBar from "../components/searchBar";
import BooksTableTab from "../components/booksTableTab";
import UserTableTab from "../components/userTableTab";
import AddEditPopup from "../components/addEditPopUp";
import "./adminBookPage.css";

import Headertab from "../components/headerTab";
function AdminBookPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Headertab role="ADMIN" />
      <main className="adminBookPage-container">
        <SearchBar
          placeholder="Search query..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <AddEditPopup />
        <BooksTableTab />
        <UserTableTab />
        <BooksTable search={search} role="admin" />
      </main>
    </>
  );
}
export default AdminBookPage;
