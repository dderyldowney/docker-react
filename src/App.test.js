import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';

import App from './App';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<App div />);
  root.unmount();
});

it ('renders "learn react" link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
