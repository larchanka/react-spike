/* global google */

import InfoBox from 'google-maps-infobox';
import './styles/CarSearchInfoBox.css';

export function createInfoBox(location) {
  let content = '<div class="CarSearchInfoBox">' +
    '<div class="iw-top"></div>' +
    '<div class="iw-mdl">';

  if (location.cars.length <= 1) {
    const car = location.cars[0];
    content += `<p class="car">${car.model} <span class="type ${car.type}"></span>`
      + `<p class="addr">${location.addr}</p>`
      + '<a class="bookLink" href="/">Book</a>';
  } else {
    content += `${location.cars.length} cars`;
  }

  content += '</div>'
    + '<div class="iw-btm"></div>'
    + '</div>';

  return new InfoBox({
    content,
    alignBottom: true,
    pixelOffset: new google.maps.Size(-85, 0),
    enableEventPropagation: true,
    infoBoxClearance: new google.maps.Size(10, 10)
  });
}
