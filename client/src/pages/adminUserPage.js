/*This file will render an admin view with all available user categories a search bar, a sign out button and two buttons for promoting  or deleting a user.
There will also be a tab for changing tables for user and book view.*/
import React, { useState } from 'react';
import BooksTableTab from "../components/booksTableTab"
import UserTableTab from "../components/userTableTab"
import UserTable from "../components/userTable"
import SearchBar from "../components/searchBar"
import Headertab from '../components/headertab'
export default function AdminUserPage() {
    const [search, setSearch] = useState('');

    return(
        <>
            <Headertab role="ADMIN"/>
            <main>
                <SearchBar placeholder="Search by username..." onChange={event => setSearch(event.target.value)}/>
                <BooksTableTab />
                <UserTableTab />
                <UserTable search={search}/>
            </main>
        </>
    )
}
