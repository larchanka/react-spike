export const CHANGE_PLACE = 'CHANGE_PLACE';
export function changePlace(place) {
  return {
    type: CHANGE_PLACE,
    place
  };
}
