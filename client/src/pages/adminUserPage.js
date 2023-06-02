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
