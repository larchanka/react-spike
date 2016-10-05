import React, { Component } from 'react';
import CarSearchPlaceInput from './CarSearchPlaceInput';

class CarSearch extends Component {
  render() {
    return (
      <div className="CarSearch">
        <CarSearchPlaceInput options={{
          types: ['geocode'],
          componentRestrictions: {country: 'nl'}
        }}/>
      </div>
    );
  }
}

export default CarSearch;
