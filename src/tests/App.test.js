import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders HomePage on default route', () => {
  // Using MemoryRouter to simulate routing for the test
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const homeHeading = screen.getByText(/Khalid Kana'an/i);
  const logoElement = screen.getByText(/KHALIDKANAAN/i);
  expect(homeHeading).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
});

test('renders ExperiencePage on /experience route', () => {
  render(
    <MemoryRouter initialEntries={['/experience']}>
      <App />
    </MemoryRouter>
  );

  const experienceHeading = screen.getByText(/DevOps Engineer/i);
  expect(experienceHeading).toBeInTheDocument();
});
