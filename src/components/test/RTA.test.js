import React from 'react';
import { render } from '@testing-library/react';
 
import RTA from '../RTA';
 
describe('RTA', () => {
  test('renders App component', () => {
    render(<RTA />);
  });
});