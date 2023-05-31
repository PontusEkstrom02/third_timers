import React, { useState } from 'react';
import Headertab from '../components/headerTab'
import SearchBar from '../components/searchBar';
import BooksTable from '../components/booksTable';

export default function GuestPage() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Headertab role="GUEST"/>
      <main>
      <SearchBar
        placeholder="Search query..."
        onChange={event => setSearch(event.target.value)}
      />
      <BooksTable search={search} role="guest"/>
      </main>
    </>
  );
}

