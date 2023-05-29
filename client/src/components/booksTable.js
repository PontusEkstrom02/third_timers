import React, { useState, useEffect } from "react";

export default function BooksTable({ search, role }) {
  const [booksList, setBooksList] = useState([]);
  console.log(role)
  useEffect(() => {
    fetch(`http://localhost:3001/library/books/search?q=${search}`)
      .then(response => response.json())
      .then(data => {
        setBooksList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);
  if (role === "guest"){
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
          {booksList.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity > 0 ? book.quantity : "Out of stock"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  else if (role === "user"){
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
          {booksList.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity > 0 ? book.quantity : "Out of stock"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  else if (role === "admin"){
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
          {booksList.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity > 0 ? book.quantity : "Out of stock"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
}
