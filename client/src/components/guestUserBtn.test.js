import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GuestUserBtn from '../components/guestUserBtn';

describe('Guest user button component', () => {
  test('renders button with correct text', () => {
    const buttonText = 'Proceed as guest user';
    render(
      <MemoryRouter>
        <GuestUserBtn>{buttonText}</GuestUserBtn>
      </MemoryRouter>
    );

    const buttonElement = screen.getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
  });
})