import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';

test('renders the logo and navigation links', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  
  // Check if the logo is rendered
  const logoElement = screen.getByText(/KHALIDKANAAN/i);
  expect(logoElement).toBeInTheDocument();

  const introLink = screen.getByText(/Introduction/i);
  const experienceLink = screen.getByText(/Experience/i);
  const projectsLink = screen.getByText(/Projects/i);
  const educationLink = screen.getByText(/Education/i);

  expect(introLink).toBeInTheDocument();
  expect(experienceLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(educationLink).toBeInTheDocument();
});
