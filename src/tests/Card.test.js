import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
  const dataWithAllFields = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    description: 'Test Description',
    image: '/test-image.jpg',
    imageAlt: 'Test Image Alt',
    links: [{ label: 'Test Link', url: 'https://test.com' }],
  };

  const dataWithoutImage = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    description: 'Test Description',
    links: [{ label: 'Test Link', url: 'https://test.com' }],
  };

  test('renders title, subtitle, description, image, and links when provided', () => {
    render(<Card data={dataWithAllFields} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Image Alt')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Test Link' })).toBeInTheDocument();
  });

  test('renders correctly without an image', () => {
    render(<Card data={dataWithoutImage} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('handles an array of descriptions', () => {
    const dataWithMultipleDescriptions = {
      ...dataWithoutImage,
      description: ['Description 1', 'Description 2'],
    };
    render(<Card data={dataWithMultipleDescriptions} />);

    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  test('does not render a section if data is missing', () => {
    const dataWithMissingFields = {
      description: 'Test Description',
      links: [{ label: 'Test Link', url: 'https://test.com' }],
    };
    render(<Card data={dataWithMissingFields} />);

    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Test Link' })).toBeInTheDocument();
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('renders the default alt text if imageAlt is missing', () => {
    const dataWithoutImageAlt = {
      ...dataWithAllFields,
      imageAlt: '',
    };
    render(<Card data={dataWithoutImageAlt} />);

    expect(screen.getByAltText('cardImg')).toBeInTheDocument();
  });
});
