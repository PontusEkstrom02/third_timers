//Search bar. User´s desire to search for a specific book.
export default function SearchBar({ placeholder, onChange }) {
    
    return (
      <input type="text" placeholder={placeholder} onChange={onChange} />
    );
  }
  
