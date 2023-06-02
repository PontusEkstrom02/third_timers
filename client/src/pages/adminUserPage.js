import React, { useState } from "react";
import BooksTableTab from "../components/BooksTableTab";
import UserTableTab from "../components/UserTableTab";
import UserTable from "../components/userTable";
import SearchBar from "../components/searchBar";
import Headertab from "../components/headertab";
export default function AdminUserPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Headertab role="ADMIN" />
      <main>
        <SearchBar
          placeholder="Search by username..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="buttons">
          <BooksTableTab />
          <UserTableTab />
        </div>
        <UserTable search={search} />
      </main>
    </>
  );
}
