/* global google */

import markerWithLabelModule from 'markerwithlabel';
import MarkerClusterer from 'marker-clusterer-plus';
import './styles/MapMarkers.css';

const MarkerWithLabel = markerWithLabelModule(google.maps);

export const spriteUrl = '/book/static/images/googlemaps-sprite.png';

export function getLabelOptions(location) {
  let labelContent = '';

  if (location.railway === true) {
    labelContent += '<div class="markerLabel railway"></div>';
  }

  // TODO more labels

  if (!labelContent) return null;

  return {
    labelContent,
    labelAnchor: new google.maps.Point(22, 44),
  };
}

export function createMarker(location, map) {
  const labelOptions = getLabelOptions(location);

  const Marker = labelOptions ? MarkerWithLabel : google.maps.Marker;

  return new Marker({
    position: { lat: location.geo[0], lng: location.geo[1] },
    map,
    title: location.addr,
    icon: {
      url: spriteUrl,
      size: new google.maps.Size(32, 38),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(16, 38)
    },
    ...labelOptions
  });
}

export function createMarkerClusterer(markers, map) {
  // eslint-disable-next-line
  return new MarkerClusterer(map, markers, {
    gridSize: 35,
    minimumClusterSize: 2,
    styles: [
      {
        url: spriteUrl,
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
