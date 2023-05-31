//this button will render a pop up page where authorized user (admin) can add/edit title, author or quantity of books


function AddNewBookBtn({onClick}) {
 
  return (
    <button onClick={onClick}>Add new book</button>
  );
}

export default AddNewBookBtn;

