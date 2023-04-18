import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/hooks/useUser';
import { Start } from './';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

const mockSignInDev = jest.fn();
const mockUseUser = jest.fn(() => ({
    user: null,
    signInDev: mockSignInDev,
}));
jest.mock('./useUser', () => ({
    useUser: () => mockUseUser(),
}));

describe('Start', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should update email and password fields', () => {
        render(<Start />);

        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');

        userEvent.type(emailInput, 'adm@mail.com');
        userEvent.type(passwordInput, '123456');

        expect(emailInput).toHaveValue('adm@mail.com');
        expect(passwordInput).toHaveValue('123456');
    });

    it('should call signInDev function with email and password when form is submitted', async () => {
        render(<Start />);

        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const form = screen.getByRole('form');

        userEvent.type(emailInput, 'adm@mail.com');
        userEvent.type(passwordInput, '123456');
        fireEvent.submit(form);

        await waitFor(() => expect(mockSignInDev).toHaveBeenCalledWith({
            email: 'adm@mail.com',
            password: '123456',
        }));
    });

    it('should show success notification and navigate to dashboard when signInDev function succeeds', async () => {
        const mockRes = { success: true };
        mockSignInDev.mockResolvedValue(mockRes);

        render(<Start />);

        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const form = screen.getByRole('form');

        userEvent.type(emailInput, 'adm@mail.com');
        userEvent.type(passwordInput, '123456');
        fireEvent.submit(form);

        await waitFor(() => expect(screen.getByText('User authenticated successfully!')).toBeInTheDocument());
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });

    it('should show error notification when signInDev function fails', async () => {
        const mockErr = new Error('Failed to authenticate user!');
        mockSignInDev.mockRejectedValue(mockErr);

        render(<Start />);

        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const form = screen.getByRole('form');

        userEvent.type(emailInput, 'adm@mail.com');
        userEvent.type(passwordInput, '123456');
        fireEvent.submit(form);

        await waitFor(() => expect(screen.getByText('Failed to authenticate user!')).toBeInTheDocument());
    });
});

