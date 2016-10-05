import React, { Component } from 'react';
import CarSearchPlaceInput from './CarSearchPlaceInput';
import CarSearchMap from './CarSearchMap';

class CarSearch extends Component {
  render() {
    return (
      <div className="CarSearch">
        <CarSearchPlaceInput options={{
          types: ['geocode'],
          componentRestrictions: { country: 'nl' }
        }}/>
        <CarSearchMap options={{
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        }}/>
      </div>
    );
  }
}

export default CarSearch;
