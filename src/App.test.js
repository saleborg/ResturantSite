import { render, screen } from '@testing-library/react';
import App from './App';

test('Site gets up', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hot Wok/i);
  expect(linkElement).toBeInTheDocument();
});
