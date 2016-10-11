/* global google */

import MarkerClusterer from 'marker-clusterer-plus';
import _ from 'lodash';
import React, { PropTypes, Component } from 'react';
import { connect } from '../util/react-redux-custom-store-key';
import { changeMapBounds } from './actions';
import * as MapMarkers from './MapMarkers';
import './styles/CarSearchMap.css';

// Map docs: https://developers.google.com/maps/documentation/javascript/tutorial

const searchZoom = 12;

function getLocation(place) {
  if (!place || !place.geometry) return null;
  return place.geometry.location;
}

const mapStateToProps = ({ selectedPlace, serverData }) => ({
  location: getLocation(selectedPlace),
  data: serverData.data
});

class CarSearchMap extends Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapDiv, {
      center: this.props.location || { lat: 52.132633, lng: 5.291266 },
      zoom: (this.props.location ? searchZoom : 8)
    });

    this.map.addListener('bounds_changed', _.throttle(() => {
      this.context.carSearchStore.dispatch(changeMapBounds(this.map.getBounds()));
    }, 500));

    if (this.props.data) {
      this.drawMarkers(this.props.data);
    }
  }

  componentWillReceiveProps(nextProps) {
    // the equality check is just to prevent other props from triggering panning
    if (nextProps.location !== this.props.location) {
      this.map.panTo(nextProps.location);
      this.map.setZoom(searchZoom);
    }

    if (nextProps.data !== this.props.data) {
      this.drawMarkers(nextProps.data);
    }
  }

  drawMarkers(data) {
    const citiesAndLocations = data.citiesAndLocations;

    const markers = [];

    for (const city of citiesAndLocations) {
      for (const location of city.locations) {
        markers.push(MapMarkers.createMarker(location, this.map));
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

  render() {
    return (
      <div className="CarSearchMap">
        <div className="mapDiv" ref={c => this.mapDiv = c} />
      </div>
    );
  }
}

CarSearchMap.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};

CarSearchMap.contextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CarSearchMap, 'carSearchStore');
