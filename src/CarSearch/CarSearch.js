import React from 'react';
import CarSearchPlaceInput from './CarSearchPlaceInput';
import CarSearchMap from './CarSearchMap';

const CarSearch = () => (
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

export default CarSearch;
