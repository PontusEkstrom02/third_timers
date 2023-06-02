/*
* This file is a component file for rendering a button that generates a popup window on which an administrator can add/edit title, author or quantity of books .
*/



function AddNewBookBtn({onClick}) {
 
  return (
    <button className="add-new-book-btn" onClick={onClick}>Add new book</button>
  );
}

export default AddNewBookBtn;

