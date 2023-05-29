import React from 'react';
import { render, screen } from '@testing-library/react';
import GuestUserBtn from '../components/guestUserBtn';

describe('Guest user button component', () => {
    test('renders button with correct text', () => {
      const buttonText = 'Proceed as guest user';
      render(<GuestUserBtn>{buttonText}</GuestUserBtn>);
  
      const buttonElement = screen.getByText(buttonText);
  
      expect(buttonElement).toBeInTheDocument();
    });
  });