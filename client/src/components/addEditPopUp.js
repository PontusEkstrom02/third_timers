/*
* This file is a component file for rendering a popup window in which an administrator can add/edit title, author or quantity of books.
*/

import React, { useState } from 'react';
import AddNewBookBtn from '../components/addNewBookBtn';


function AddEditPopup() {
  const token = localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');
  
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
    fetch('http://localhost:3001/admin/books', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
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
    }


 
  return (
    <div>
      <AddNewBookBtn onClick={openPopup}/>
      {isOpen && (
        <div className="addEditpopup">
          <div className="popup-content">
            <h2>{'<Add/Edit>'} book</h2>
            <form onSubmit={addNewBook} >
              <div>
                <label htmlFor="title">Title-{'<current title>'}</label>
                <input
                  id="title"
                  placeholder='Insert new title...'
                  onChange={handleTitleChange}
                />
              </div>
              <div>
                <label htmlFor="author">Author-{'<current author>'}</label>
                <input
                  id="author"
                  placeholder='Insert new author...'
                 
                  onChange={handleAuthorChange} 
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity-{'<current quantity>'}</label>
                <input
                  id="quantity"
                  placeholder='Insert new quantity...'
                  
                  onChange={handleQuantityChange}
                />
              </div>
              <div>
                <button type="submit">Save changes</button>
                <button type="button" onClick={closePopup}>Discard changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddEditPopup;

