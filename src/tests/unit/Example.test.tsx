import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

test('Renders the main page', () => {
  const wrapper = render(<App />);
  expect(wrapper).toBeTruthy();
});
