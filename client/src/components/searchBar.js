/*
* This file is a component file for rendering a search bar managing the users search querys. The bar is located on the guest, user and administrator view.
*/
import '../index.css';

export default function SearchBar({ placeholder, onChange }) {
  return (
    <input
      type="text"
      data-testid="search-input"
      placeholder={placeholder}
      onChange={onChange}
      className="input-field"
    />
  );
}
