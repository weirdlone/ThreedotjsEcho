// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ThreedotjsEcho title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ThreedotjsEcho/i);
    expect(titleElement).toBeInTheDocument();
});
