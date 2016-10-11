import React, { PropTypes, Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import carSearchRootReducer from './reducers/index';
import { fetchData } from './actions/FetchActions';
import CarSearchLayout from './CarSearchLayout';
import './styles/CarSearch.css';

const loggerMiddleware = createLogger();

// To make it easy to include into any application,
// the CarSearch widget does not depend on any global stores.
// Instead, it has its own store,
// which is passed down to its children through context.carSearchStore.
const carSearchStore = createStore(
  carSearchRootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

carSearchStore.dispatch(fetchData());

class CarSearch extends Component {

  getChildContext() {
    // Can't use react-redux Provider, because it doesn't support a custom store key
    return { carSearchStore };
  }

  render() {
    return (
      <div className="CarSearch">
        <CarSearchLayout />
      </div>
    );
  }
}

CarSearch.childContextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default CarSearch;
