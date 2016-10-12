import React, { PropTypes } from 'react';
import CarSearchPlaceInput from './CarSearchPlaceInput';
import './styles/CarSearchTopBar.css';

const CarSearchTopBar = () => (
  <div className="CarSearchTopBar">
    <CarSearchPlaceInput
      options={{
        types: ['geocode'],
        componentRestrictions: { country: 'nl' }
      }}
    />
  </div>
);

CarSearchTopBar.contextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default CarSearchTopBar;
