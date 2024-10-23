import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import introData from '../assets/data/introData';

jest.mock('../components/Card', () => ({ data }) => (
  <div data-testid="mock-card">
    {data.title || data.description || 'No title or description'}
  </div>
)); // Mock Card component

describe('HomePage component', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  test('renders the left side with correct cards', () => {
    expect(screen.getByText(introData.Welcome.title)).toBeInTheDocument();
    expect(screen.getByText(introData.KhalidInDesert.description)).toBeInTheDocument();
  });

  test('renders the right side with correct cards', () => {
    expect(screen.getByText(introData.AboutMe.title)).toBeInTheDocument();
    expect(screen.getByText(introData.Links.title)).toBeInTheDocument();
    expect(screen.getByText(introData.Tools.title)).toBeInTheDocument();
    expect(screen.getByText(introData.KhalidCoding.description)).toBeInTheDocument();
  });

  test('renders the correct number of cards on both sides', () => {
    const totalCards = 6;
    const renderedCards = screen.getAllByTestId('mock-card');
    expect(renderedCards).toHaveLength(totalCards);
  });
});
