import React from 'react';
import ReactDOM from 'react-dom';
import Dialer from './Dialer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dialer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
