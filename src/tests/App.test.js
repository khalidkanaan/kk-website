import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import introData from '../assets/data/introData';
import experienceData from '../assets/data/expeirenceData'
import App from '../App';

// Helper function to render App with MemoryRouter
const renderWithRouter = (route) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
};

// Helper function to check header elements
const checkHeaderElements = () => {
  const introLink = screen.getByRole('link', { name: /Introduction/i });
  const experienceLink = screen.getByRole('link', { name: /Experience/i });
  const projectsLink = screen.getByRole('link', { name: /Projects/i });
  const educationLink = screen.getByRole('link', { name: /Education/i });
  const logoElement = screen.getByText(/KHALIDKANAAN/i);

  expect(introLink).toBeInTheDocument();
  expect(experienceLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(educationLink).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
};

test('renders HomePage on default route', () => {
  renderWithRouter('/');

  const uniqueHomePageElement = screen.getByText(introData.KhalidInDesert.description);
  expect(uniqueHomePageElement).toBeInTheDocument();

  checkHeaderElements();
});

test('renders ExperiencePage on /experience route', () => {
  renderWithRouter('/experience');

  const uniqueExperiencePageElement = screen.getByText(experienceData.HealthCanada.subtitle);
  expect(uniqueExperiencePageElement).toBeInTheDocument();

  checkHeaderElements();
});
