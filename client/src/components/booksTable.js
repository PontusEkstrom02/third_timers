import React, { useState, useEffect } from 'react';

export default function BooksTable() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/library/books')
      .then(response => response.json())
      .then(data => {
        setBooksList(data.books);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Book title</th>
          <th>Book author</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        {booksList.map(book => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

