import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from './App';

it('Renders my name', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
