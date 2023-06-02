//This file will render a user view with books and their information. The file will also render a search bar, a sign out button, increment/decrement buttons and an order button.
import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import BooksTable from "../components/booksTable";
import Headertab from "../components/headerTab";

export default function UserPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Headertab role="USER" />
      <main>
        <SearchBar
          placeholder="Search query..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <BooksTable search={search} role="user" />
      </main>
    </>
  );
}
