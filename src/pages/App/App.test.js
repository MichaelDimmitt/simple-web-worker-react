import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn random link', () => {
  render(<App />);
  const linkElement = screen.getByText(/random link/i);
  expect(linkElement).toBeInTheDocument();
});
