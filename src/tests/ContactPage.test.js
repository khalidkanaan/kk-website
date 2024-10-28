import { React, act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '../pages/ContactPage';
import '@testing-library/jest-dom/extend-expect';

beforeAll(() => {
    jest.useFakeTimers();

    // Mock clipboard API
    Object.assign(navigator, {
        clipboard: {
            writeText: jest.fn(),
        },
    });
});

beforeEach(() => {
    render(<ContactPage />);
});

describe('ContactPage Component', () => {
    test('renders ContactPage with title and description', () => {
        expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
        expect(screen.getByText(/Feel free to reach out/i)).toBeInTheDocument();
    });

    test('displays main contact information: email, phone, and location', () => {
        const emailLink = screen.getByText(/khalid.kanaan.ca@gmail.com/i);
        expect(emailLink.closest('a')).toHaveAttribute('href', expect.stringContaining('mailto:'));

        const phoneLink = screen.getByText(/6138678218/i);
        expect(phoneLink.closest('a')).toHaveAttribute('href', expect.stringContaining('tel:'));

        expect(screen.getByText(/Available to relocate for any position/i)).toBeInTheDocument();
    });

    test('renders social media icons', () => {
        expect(screen.getByAltText('LinkedIn')).toBeInTheDocument();
        expect(screen.getByAltText('GitHub')).toBeInTheDocument();
        expect(screen.getByAltText('Resume')).toBeInTheDocument();
    });

    test('copies email to clipboard and displays copied feedback', () => {
        const copyButton = screen.getByAltText('Copy');        
        act(() => {
            fireEvent.click(copyButton);
        });
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining('@'));
        expect(screen.getByAltText('Copied')).toBeInTheDocument();
    
        act(() => {
            jest.advanceTimersByTime(2000);
        });
        expect(screen.queryByAltText('Copied')).not.toBeInTheDocument();
    });
});
