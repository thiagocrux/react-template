import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './index';

describe('App.tsx', () => {
  it('should render the component', () => {
    render(<App />);
    expect(screen).toBeTruthy();
  });
});
