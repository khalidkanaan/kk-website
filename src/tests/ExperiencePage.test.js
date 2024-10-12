import { render, screen } from '@testing-library/react';
import ExperiencePage from '../components/ExperiencePage';

test('renders DevOps Engineer heading', () => {
  render(<ExperiencePage />);
  const headingElement = screen.getByText(/DevOps Engineer/i);
  expect(headingElement).toBeInTheDocument();
});
