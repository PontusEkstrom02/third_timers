/*
 * This file is a component that is used to render out a table of all the different books by feach and
 * depending on what site it return different tables.
 * The code is using ifs for the different returns and is making it more code then nesasary but works
 * for now and the way to inprov it would be to have only one return that would have if statesment in it
 * that would return different tablers to different sites
*/
import React, { useState, useEffect } from "react";
import BooksActionField from "./bookActionField"
import BooksOrderField from "./bookOrderField";
export default function BooksTable({ search, role }) {
  const [booksList, setBooksList] = useState([]);
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
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity > 0 ? book.quantity : "Out of stock"}</td>
              <BooksOrderField Bookquantity={book.quantity} Booktitle={book.title} newBooklist= {setBooksList}/>
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
              <BooksOrderField Bookquantity={book.quantity} Booktitle={book.title} newBooklist= {setBooksList}/>
              <BooksActionField Bookquantity={book.quantity} Booktitle={book.title} BookAuthor={book.author} search={search}/>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
}
