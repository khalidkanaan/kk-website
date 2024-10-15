import React from 'react';
import { render, screen } from '@testing-library/react';
import BasePage from '../components/BasePage';

describe('BasePage Component', () => {
  const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

  afterEach(() => {
    consoleWarnSpy.mockClear();
  });

  afterAll(() => {
    consoleWarnSpy.mockRestore();
  });

  test('renders children when no leftChildren or rightChildren are provided', () => {
    render(<BasePage>Content</BasePage>);

    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();
  });

  test('renders leftChildren and rightChildren when provided, and ignores children', () => {
    render(
      <BasePage leftChildren={<div>Left Content</div>} rightChildren={<div>Right Content</div>}>
        Main Content
      </BasePage>
    );

    const leftContent = screen.getByText('Left Content');
    const rightContent = screen.getByText('Right Content');
    const mainContent = screen.queryByText('Main Content');

    expect(leftContent).toBeInTheDocument();
    expect(rightContent).toBeInTheDocument();
    expect(mainContent).toBeNull(); // children should be ignored
  });

  test('logs a warning if both children and leftChildren/rightChildren are provided', () => {
    render(
      <BasePage leftChildren={<div>Left Content</div>} rightChildren={<div>Right Content</div>}>
        Main Content
      </BasePage>
    );

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'BasePage: Both children and leftChildren/rightChildren were provided. children will be ignored.'
    );
  });
});
