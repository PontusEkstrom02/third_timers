/*
* This file is a component file for rendering an inputfield located on the login page. 
*/

export default function loginRegisterInput({ placeholder, onChange }) {
  return (
    <input type="text" data-testid="" placeholder={placeholder} onChange={onChange} />
  );
}
