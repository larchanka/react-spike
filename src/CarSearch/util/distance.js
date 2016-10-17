function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

/**
 * Get distance taking the convex of the earth into account
 * This function was ported from java class DistanceUtil in nl.info.greenwheels.model.support
 * @param pos1 GMaps position: user location
 * @param pos2 GMaps position: target
 * @returns {string}
 */
export function getDistance(pos1, pos2) {
  const lat1Rad = degreesToRadians(pos1.lat());
  const lat2Rad = degreesToRadians(pos2.lat());
  const deltaLonRad = degreesToRadians(pos2.lng() - pos1.lng());
  const R = 6378140; // meters
  console.log(lat1Rad, lat2Rad, deltaLonRad);

  const distance = Math.acos(
    (Math.sin(lat1Rad) * Math.sin(lat2Rad))
    + (Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.cos(deltaLonRad) * R));
  return (distance / 1000).toFixed(2);
}
