import React from 'react';
import { render } from '@testing-library/react';
import LoginRegisterInput from '../components/loginRegisterInput'; 

describe('Login/register input component', () => {
    test('renders without errors', () => {
      render(<LoginRegisterInput />);
    });
  });