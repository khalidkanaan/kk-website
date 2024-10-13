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
