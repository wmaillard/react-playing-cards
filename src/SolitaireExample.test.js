import React from 'react';
import ReactDOM from 'react-dom';
import TableExample from './TableExample';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableExample />, div);
});
