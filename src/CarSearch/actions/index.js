export const CHANGE_PLACE = 'CHANGE_PLACE';
export function changePlace(place) {
  return {
    type: CHANGE_PLACE,
    place
  };
}

export const CHANGE_MAP_BOUNDS = 'CHANGE_MAP_BOUNDS';
export function changeMapBounds(mapBounds) {
  return {
    type: CHANGE_MAP_BOUNDS,
    mapBounds
  };
}

export const CHANGE_SELECTED_CAR = 'CHANGE_SELECTED_CAR';
export function changeMapBounds(mapBounds) {
  return {
    type: CHANGE_SELECTED_CAR,
    mapBounds
  };
}
