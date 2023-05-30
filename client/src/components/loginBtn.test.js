import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginBtn from '../components/loginBtn'; 

describe('Login button component', () => {
    test('triggers onClick event when clicked', () => {
      const onClickMock = jest.fn();
       render(<LoginBtn onClick={onClickMock}>Sign in</LoginBtn>);
      const buttonElement = screen.getByText('Sign in');
  
      fireEvent.click(buttonElement);
  
      expect(onClickMock).toHaveBeenCalled();
    });
  });