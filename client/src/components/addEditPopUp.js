//admins add/edit popup window for books updates/addition.
import React, { useState } from 'react';
import AddNewBookBtn from '../components/addNewBookBtn';

function AddEditPopup() {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the input values
    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Quantity:', quantity);
    // Close the pop-up
    closePopup();
  };
 //</div>onClick={openPopup}>Add new book</button>
  return (
    <div>
      <AddNewBookBtn onClick={openPopup}/>
      {isOpen && (
        <div className="addEditpopup">
          <div className="popup-content">
            <h2>{'<Add/Edit>'} book</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Title-{'<current title>'}</label>
                <input
                  id="title"
                  placeholder='Insert new title...'
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              <div>
                <label htmlFor="author">Author-{'<current author>'}</label>
                <input
                  id="author"
                  placeholder='Insert new author...'
                  value={author}
                  onChange={handleAuthorChange}
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity-{'<current quantity>'}</label>
                <input
                  id="quantity"
                  placeholder='Insert new quantity...'
                  value={quantity}
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

