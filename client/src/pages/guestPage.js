import React, { useState } from 'react';
import SearchBar from '../components/searchBar';
import BooksTable from '../components/booksTable';

export default function GuestPage() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <SearchBar
        placeholder="Search query..."
        onChange={event => setSearch(event.target.value)}
      />
      <BooksTable search={search} />
    </div>
  );
}

