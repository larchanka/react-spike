/* global google */

import InfoBox from 'google-maps-infobox';
import './styles/CarSearchInfoBox.css';

export function createInfoBox(location) {
  let content = '<div class="CarSearchInfoBox">' +
    '<div class="iw-top"></div>' +
    '<div class="iw-mdl">';

  content += `<p class="addr">${location.addr}</p>`;
  // TODO

  content += '</div>' +
    '<div class="iw-btm"></div>';
  content += '</div>';

  return new InfoBox({
    content,
    alignBottom: true,
    pixelOffset: new google.maps.Size(-85, 0),
    closeBoxURL: '',
    enableEventPropagation: true,
    infoBoxClearance: new google.maps.Size(10, 10)
  });
}
