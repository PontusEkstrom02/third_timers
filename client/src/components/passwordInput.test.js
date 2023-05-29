import React from 'react';
import { render, screen } from '@testing-library/react';
import PasswordInput from '../components/passwordInput'; 

describe('PasswordInput component', () => {
    test('checks that password field exists', () => {
        render(<PasswordInput />);

        const passwordLbl = screen.getByText("Password");
        expect(passwordLbl).toBeInTheDocument();
    }
    )});
