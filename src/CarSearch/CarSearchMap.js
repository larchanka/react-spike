/* global google */

import _ from 'lodash';
import React, { PropTypes, Component } from 'react';
import { connect } from './util/react-redux-custom-store-key';
import { changeMapBounds, changeSelectedLocation } from './actions';
import { createMarker, createMarkerClusterer } from './MapMarkers';
import { createInfoBox } from './CarSearchInfoBox';
import './styles/CarSearchMap.css';

// Map docs: https://developers.google.com/maps/documentation/javascript/tutorial

const searchZoom = 12;

const mapStateToProps = ({ selectedPlace, serverData, selectedLocation }) => ({
  initialLatLng: selectedPlace ? selectedPlace.geometry.location : null,
  data: serverData.data,
  selectedLocation
});

class CarSearchMap extends Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapDiv, {
      center: this.props.initialLatLng || { lat: 52.132633, lng: 5.291266 },
      zoom: (this.props.initialLatLng ? searchZoom : 8)
    });

    this.map.addListener('bounds_changed', _.throttle(() => {
      this.context.carSearchStore.dispatch(changeMapBounds(this.map.getBounds()));
    }, 500));

    if (this.props.data) {
      this.drawMarkers(this.props.data);

      this.drawInfoWindow(this.props.selectedLocation);
    }
  }

  componentWillReceiveProps(nextProps) {
    // the equality check is just to prevent other props from triggering panning
    if (nextProps.initialLatLng !== this.props.initialLatLng) {
      this.map.panTo(nextProps.initialLatLng);
      this.map.setZoom(searchZoom);
    }

    if (nextProps.data !== this.props.data) {
      this.drawMarkers(nextProps.data);
    }

    if (nextProps.selectedLocation !== this.props.selectedLocation) {
      this.drawInfoWindow(nextProps.selectedLocation);
    }
  }

  drawMarkers(data) {
    const markers = [];

    for (const city of data.citiesAndLocations) {
      for (const location of city.locations) {
        const marker = createMarker(location, this.map);
        marker.addListener('click', () => {
          this.context.carSearchStore.dispatch(changeSelectedLocation(location));
        });
        markers.push(marker);
        location.marker = marker;
      }
    }

    createMarkerClusterer(markers, this.map);
  }

  drawInfoWindow(location) {
    if (this.infoBox) {
      this.infoBox.close();
    }

    if (!location) return;

    this.infoBox = createInfoBox(location);

    this.infoBox.addListener('closeclick', () => {
      this.context.carSearchStore.dispatch(changeSelectedLocation(null));
    });

    this.infoBox.open(this.map, location.marker);

    if (this.map.getZoom() < searchZoom) {
      this.map.panTo(location.marker.getPosition());
      this.map.setZoom(searchZoom);
    }
  }

  render() {
    return (
      <div className="CarSearchMap">
        <div className="mapDiv" ref={c => this.mapDiv = c} />
      </div>
    );
  }
}

CarSearchMap.propTypes = {
  initialLatLng: PropTypes.object,
  data: PropTypes.object,
  selectedLocation: PropTypes.object
};

CarSearchMap.contextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CarSearchMap, 'carSearchStore');
