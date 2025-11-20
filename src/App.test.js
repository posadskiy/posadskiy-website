import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // Check that the page container is rendered
  const pageElement = document.getElementById('page');
  expect(pageElement).toBeInTheDocument();
});
