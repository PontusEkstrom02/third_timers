/*
* This file is a component file for rendering the action column on the administrator view. It contains an edit button that generates a popup window on which an administrator can add/edit title, author or quantity of books. 
* It also contains a delete button which deletes desired title and renders an updatet list of books. There is room for improvement specifically regarding the location reload method where better 
* methods for real time updates can be implemented.
*/



import React, { useState } from 'react';
export default function BooksActionField({Bookquantity, Booktitle, BookAuthor}){
  const token = localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
  const [oldtitle, setOldtitle] = useState(Booktitle);
  const [title, setTitle] = useState(Booktitle);
  const [author, setAuthor] = useState(BookAuthor);
  const [quantity, setQuantity] = useState(Bookquantity);
  
  const handleDeleteClick = () => {
    deleteBook();
  };

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


const titleData = {title:Booktitle}

const userData = {
    previous: {title: Booktitle},
    current: {title: title, author: author, quantity: quantity},
};

  const addNewBook = () => {
    fetch('http://localhost:3001/admin/books', {
            method: 'PUT',
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
  };

    const deleteBook = () => {
      fetch("http://localhost:3001/admin/books", {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(titleData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            window.location.reload(true)
          })
          .catch((error) => {
            console.error(error);
          });
      };

  
    return(
        <>
            <td>
                <button onClick={openPopup}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
            </td>
            {isOpen && (
                <div className="addEditpopup">
                    <div className="popup-content">
                    <h2>{'Edit'} book</h2>
                    <form onSubmit={addNewBook} >
                        <div>
                        <label htmlFor="title">Title-{Booktitle}</label>
                        <input
                            id="title"
                            placeholder='Insert new title...'
                            onChange={handleTitleChange}
                        />
                        </div>
                        <div>
                        <label htmlFor="author">Author-{BookAuthor}</label>
                        <input
                            id="author"
                            placeholder='Insert new author...'
                            onChange={handleAuthorChange} 
                        />
                        </div>
                        <div>
                        <label htmlFor="quantity">Quantity-{Bookquantity}</label>
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
        </>
    )
  }
