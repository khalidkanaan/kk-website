import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';

test('renders name heading', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  
  const homeHeading = screen.getByText(/Khalid Kana'an/i);
  expect(homeHeading).toBeInTheDocument();
});
