import React from 'react';
import { render } from '@testing-library/react';
import UsernameInput from '../components/usernameInput'; 

describe('UsernameInput component', () => {
    test('renders without errors', () => {
      render(<UsernameInput />);
    });
  });