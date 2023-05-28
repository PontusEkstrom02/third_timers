import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import LoginPage from '../pages/loginPage';

describe('Login component', () => {
    test('submits the form with correct credentials', async () => {
      const mockSubmit = jest.fn(); // Mock the form submission function
  
      render(<LoginPage onSubmit={mockSubmit} />);
  
      const usernameInput = screen.getByLabelText('Username');
      const passwordInput = screen.getByLabelText('Password');
      const signInButton = screen.getByText('SignIn');
  
      fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
  
      fireEvent.click(signInButton);
  
      await waitFor(() => {
        // Assert the desired behavior based on the form submission
        expect(mockSubmit).toHaveBeenCalledWith({
          username: 'test@example.com',
          password: 'password123',
        });
      });
    });
  });
  