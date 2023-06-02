//admins add/edit popup window for books updates/addition.
import React, { useState } from "react";
import AddNewBookBtn from "../components/addNewBookBtn";
import "./addEditPopUp.css";

function AddEditPopup() {
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const userData = {
    title: title,
    author: author,
    quantity: quantity,
  };

  const addNewBook = () => {
    fetch("http://localhost:3001/admin/books", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        closePopup();
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div className="addEdit-container">
      <AddNewBookBtn onClick={openPopup} />
      
      {isOpen && (<div className="Gray"></div>)}
      {isOpen && (
        <div className="popup-content">
          <h2>Add book</h2>
          <form onSubmit={addNewBook} className="form-popup">
            <div className="form-div">
              <label htmlFor="title">Title</label>
              <input
                className="form-input"
                id="title"
                placeholder="Insert new title..."
                onChange={handleTitleChange}
              />
            </div>
            <div className="form-div">
              <label htmlFor="author">Author</label>
              <input
                className="form-input"
                id="author"
                placeholder="Insert new author..."
                onChange={handleAuthorChange}
              />
            </div>
            <div className="form-div">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="form-input"
                id="quantity"
                placeholder="Insert new quantity..."
                onChange={handleQuantityChange}
              />
            </div>
            <div>
              <button type="submit" className="form-button-save">Save changes</button>
              <button type="button" onClick={closePopup} className="form-button-discard">Discard changes</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddEditPopup;
