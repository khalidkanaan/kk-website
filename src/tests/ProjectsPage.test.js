import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsPage from '../pages/ProjectsPage';
import projectData from '../assets/data/projectData';

jest.mock('../components/Card', () => ({ data }) => (
  <div data-testid="mock-card">
    {data.title || data.description || 'No title or description'}
  </div>
));

describe('ProjectsPage component', () => {
  beforeEach(() => {
    render(<ProjectsPage />);
  });

  test('renders the left side with correct cards', () => {
    expect(screen.getByText(projectData.Cybered.title)).toBeInTheDocument();
    expect(screen.getByText(projectData.ManufacturingSimulation.title)).toBeInTheDocument();
    expect(screen.getByText(projectData.MusicGenreClassification.title)).toBeInTheDocument();
    expect(screen.getByText(projectData.JavaMonopoly.title)).toBeInTheDocument();
  });

  test('renders the right side with correct cards', () => {
    expect(screen.getByText(projectData.JiraCSVGenie.title)).toBeInTheDocument();
    expect(screen.getByText(projectData.ElevatorControlSystem.title)).toBeInTheDocument();
    expect(screen.getByText(projectData.AmazinBookstore.title)).toBeInTheDocument();
    expect(screen.getByText(projectData.MSP432LEDControl.title)).toBeInTheDocument();
  });

  test('renders the correct number of cards on both sides', () => {
    const totalCards = 8;
    const renderedCards = screen.getAllByTestId('mock-card');
    expect(renderedCards).toHaveLength(totalCards);
  });
});
