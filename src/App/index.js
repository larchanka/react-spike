import React from 'react';

import CarSearch from '../CarSearch/CarSearch';

import logo from './logo.svg';
import './styles/App.css';

const name = 'Misha';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React, {name}!!</h2>
    </div>
    <CarSearch />
  </div>
);

export default App;
