import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('Renders my name', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
