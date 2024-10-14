import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Helper function to render App with MemoryRouter
const renderWithRouter = (route) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
};

// Helper function to check navigation links
const checkNavigationLinks = () => {
  const introLink = screen.getByText(/Introduction/i);
  const experienceLink = screen.getByText(/Experience/i);
  const projectsLink = screen.getByText(/Projects/i);
  const educationLink = screen.getByText(/Education/i);

  expect(introLink).toBeInTheDocument();
  expect(experienceLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(educationLink).toBeInTheDocument();
};

test('renders HomePage on default route', () => {
  renderWithRouter('/');

  const homeHeading = screen.getByText(/Khalid Kana'an/i);
  const logoElement = screen.getByText(/KHALIDKANAAN/i);
  expect(homeHeading).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();

  checkNavigationLinks();
});

test('renders ExperiencePage on /experience route', () => {
  renderWithRouter('/experience');

  const experienceHeading = screen.getByText(/DevOps Engineer/i);
  expect(experienceHeading).toBeInTheDocument();

  checkNavigationLinks();
});
