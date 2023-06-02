/*
 * This file is a component file for rendering a table of all the different books using the fetch method and
 * depending on the URL it returns different tables.
 * The code is using if statements for the different returns which requires makes the file long with alot of lines of code. 
 * One way of improvement would be to have only one return with if statements in it,
 * that would return different tables for different URLs.
 */
import React, { useState, useEffect } from "react";
import BooksActionField from "./bookActionField";
import BooksOrderField from "./bookOrderField";

export default function BooksTable({ search, role }) {
  const [booksList, setBooksList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/library/books/search?q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setBooksList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);
  if (role === "guest") {
    return (
      <table>
        <thead className="table-headers">
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
  } else if (role === "user") {
    return (
      <table>
        <thead>
          <tr>
            <th>Book title</th>
            <th>Book author</th>
            <th>Availability</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity > 0 ? book.quantity : "Out of stock"}</td>
              <BooksOrderField
                Bookquantity={book.quantity}
                Booktitle={book.title}
                newBooklist={setBooksList}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (role === "admin") {
    return (
      <table>
        <thead>
          <tr>
            <th>Book title</th>
            <th>Book author</th>
            <th>Availability</th>
            <th>Order</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity > 0 ? book.quantity : "Out of stock"}</td>
              <BooksOrderField
                Bookquantity={book.quantity}
                Booktitle={book.title}
                newBooklist={setBooksList}
              />
              <BooksActionField
                Bookquantity={book.quantity}
                Booktitle={book.title}
                BookAuthor={book.author}
                search={search}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
