/* global google */

export function getDistanceMeters(pos1, pos2) {
  return google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
}

export function getDistanceString(distanceMeters) {
  if (distanceMeters < 1000) {
    return `${Math.round(distanceMeters)} m`;
  }
  return `${(distanceMeters / 1000).toFixed(2)} km`;
}
