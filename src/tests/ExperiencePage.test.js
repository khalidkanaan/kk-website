import React from 'react';
import { render, screen } from '@testing-library/react';
import ExperiencePage from '../pages/ExperiencePage';
import experienceData from '../assets/data/expeirenceData'

jest.mock('../components/Card', () => ({ data }) => (
  <div data-testid="mock-card">
    {data.subtitle || data.description[0] || 'No subtitle or description'}
  </div>
));

describe('ExperiencePage component', () => {
  beforeEach(() => {
    render(<ExperiencePage />);
  });

  test('renders the left side with correct cards', () => {
    expect(screen.getByText(experienceData.HealthCanada.subtitle)).toBeInTheDocument();
  });

  test('renders the right side with correct cards', () => {
    expect(screen.getByText(experienceData.Interac.subtitle)).toBeInTheDocument();
    expect(screen.getByText(experienceData.CanadaPost.subtitle)).toBeInTheDocument();
  });

  test('renders the correct number of cards on both sides', () => {
    const totalCards = 3;
    const renderedCards = screen.getAllByTestId('mock-card');
    expect(renderedCards).toHaveLength(totalCards);
  });
});
