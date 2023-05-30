//Search bar. User´s desire to search for a specific book.
export default function SearchBar({ placeholder, onChange }) {
    
    return (
      <input 
      type="text" 
      data-testid="search-input" 
      placeholder={placeholder} 
      onChange={onChange} />
    );
  }
  
