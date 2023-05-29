import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginBtn from '../components/loginBtn'; 

describe('Button component', () => {
    test('triggers onClick event when clicked', () => {
      const onClickMock = jest.fn();
       render(<LoginBtn onClick={onClickMock}>Click me</LoginBtn>);
      const buttonElement = screen.getByText('Click me');
  
      fireEvent.click(buttonElement);
  
      expect(onClickMock).toHaveBeenCalled();
    });
  });