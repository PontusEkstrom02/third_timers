import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../components/searchBar';

describe('SearchBar component', () => {
    test('triggers onChange event and updates search query', () => {
      render(<SearchBar />);
      const inputElement = screen.getByTestId('search-input'); 
  
      fireEvent.change(inputElement, { target: { value: 'Test query' } });
  
      expect(inputElement.value).toBe('Test query');
    });
  });