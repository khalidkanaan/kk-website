import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';

test('renders Khalid Kana\'an heading', () => {
  render(<HomePage />);
  const headingElement = screen.getByText(/Khalid Kana'an/i);
  expect(headingElement).toBeInTheDocument();
});
