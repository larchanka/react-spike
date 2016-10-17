/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

import './styles/index.css';

const init = (nodeId, props) => {
  const node = document.getElementById(nodeId);

  if (node) {
    ReactDOM.render(
      <App {...props} />,
      node
    );
  }
};

init('root');
