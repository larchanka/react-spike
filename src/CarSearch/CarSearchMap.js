/* global google */

import MarkerClusterer from 'marker-clusterer-plus';
import InfoBox from 'google-maps-infobox';
import _ from 'lodash';
import React, { PropTypes, Component } from 'react';
import { connect } from '../util/react-redux-custom-store-key';
import { changeMapBounds, changeSelectedLocation } from './actions';
import * as MapMarkers from './MapMarkers';
import './styles/CarSearchMap.css';

// Map docs: https://developers.google.com/maps/documentation/javascript/tutorial

const searchZoom = 12;

function getLatLng(place) {
  if (!place || !place.geometry) return null;
  return place.geometry.location;
}

const mapStateToProps = ({ selectedPlace, serverData, selectedLocation }) => ({
  initialLatLng: getLatLng(selectedPlace),
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

      if (this.props.selectedLocation) {
        this.drawInfoWindow(this.props.selectedLocation);
      }
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
    const citiesAndLocations = data.citiesAndLocations;

    const markers = [];

    for (const city of citiesAndLocations) {
      for (const location of city.locations) {
        const marker = MapMarkers.createMarker(location, this.map);
        marker.addListener('click', () => {
          this.context.carSearchStore.dispatch(changeSelectedLocation(location));

          if (this.map.getZoom() < searchZoom) {
            this.map.panTo(marker.getPosition());
            this.map.setZoom(searchZoom);
          }
        });
        markers.push(marker);
        location.marker = marker;
      }
    }

    // eslint-disable-next-line
    new MarkerClusterer(this.map, markers, {
      gridSize: 35,
      minimumClusterSize: 4,
      styles: [
        {
          url: MapMarkers.spriteUrl,
          height: 28,
          width: 28,
          anchorText: [1, 0],
          textColor: '#fff',
          textSize: 10,
          backgroundPosition: '-360px -85px'
        }
      ]
    });
  }

  drawInfoWindow(location) {
    if (this.infoBox) {
      this.infoBox.close();
    }

    this.infoBox = new InfoBox({
      content: location.addr
    });
    this.infoBox.open(this.map, location.marker);
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
