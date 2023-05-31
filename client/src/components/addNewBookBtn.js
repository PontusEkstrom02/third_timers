//this button will render a pop up page where authorized user (admin) can add/edit title, author or quantity of books

import { useNavigate } from 'react-router-dom';

function AddNewBookBtn() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('../components/addEditPopUp');
  };

  return (
    <button onClick={handleButtonClick}>Add new book</button>
  );
}


export default AddNewBookBtn;

