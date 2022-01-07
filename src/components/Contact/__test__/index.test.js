import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);
describe('Contact component', () => {
      it('renders contact', () => {
          render(<ContactForm/>)
      });
      it('matches snap shot', () => {
          const {asFragment} = render(<ContactForm/>)
          expect(asFragment()).toMatchSnapshot();
      });

})