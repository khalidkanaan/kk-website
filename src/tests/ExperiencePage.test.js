import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExperiencePage from '../components/ExperiencePage';

test('renders DevOps Engineer heading', () => {
  render(
    <MemoryRouter>
      <ExperiencePage />
    </MemoryRouter>);
    
  const headingElement = screen.getByText(/DevOps Engineer/i);
  expect(headingElement).toBeInTheDocument();
});
