import React, { PropTypes, Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import CarSearchPlaceInput from './CarSearchPlaceInput';
import CarSearchMap from './CarSearchMap';
import carSearchRootReducer from './reducers/index';


const loggerMiddleware = createLogger();


// The CarSearch widget does not depend on any global stores,
// to make it easy to include into any application.
// Instead, it has its own store,
// which is passed down to its children through context.carSearchStore.
const carSearchStore = createStore(
  carSearchRootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);


class CarSearch extends Component {

  // eslint-disable-next-line
  getChildContext() {
    // Can't use react-redux Provider, because the "store" key might already be used.
    // We want a context key that's only used for this widget.
    return { carSearchStore };
  }

  render() {
    return (
      <div className="CarSearch">
        <CarSearchPlaceInput
          options={{
            types: ['geocode'],
            componentRestrictions: { country: 'nl' }
          }}
        />
        <CarSearchMap
          options={{
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
          }}
        />
      </div>
    );
  }
}

CarSearch.childContextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default CarSearch;
