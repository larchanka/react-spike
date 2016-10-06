/* global window */

import React, { PropTypes, Component } from 'react';
import './styles/CarSearchMap.css';

// Map docs: https://developers.google.com/maps/documentation/javascript/tutorial

class CarSearchMap extends Component {
  componentDidMount() {
    const defaultZoom = 8;

    const map = new window.google.maps.Map(this.mapDiv, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: defaultZoom
    });
    console.log(map);

    const carSearchStore = this.context.carSearchStore;
    let previousSelectedPlace = carSearchStore.getState().selectedPlace;
    this.unsubscribe = carSearchStore.subscribe(() => {
      const selectedPlace = carSearchStore.getState().selectedPlace;

      // only update when selectedPlace of the store changes
      if (selectedPlace === previousSelectedPlace) return;
      previousSelectedPlace = selectedPlace;

      if (selectedPlace && selectedPlace.geometry) {
        map.panTo(selectedPlace.geometry.location);
        map.setZoom(defaultZoom);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="CarSearchMap">
        <div className="mapDiv" ref={c => this.mapDiv = c} />
      </div>
    );
  }
}

CarSearchMap.contextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default CarSearchMap;
