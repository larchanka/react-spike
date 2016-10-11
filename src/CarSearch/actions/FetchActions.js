import fetch from 'isomorphic-fetch';

export const REQUEST_DATA = 'REQUEST_DATA';
function requestData() {
  return {
    type: REQUEST_DATA
  };
}

export const RECEIVE_DATA = 'RECEIVE_DATA';
function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(requestData());

    const timeStamp = Date.now();
    const endpointUrls = {
      citiesAndLocations: `/book/js/nl/citiesAndLocations/?_=${timeStamp}`,
      // bookedCars: `/book/js/nl/bookedCars/?_=${timeStamp}`,
      // myBookedCars: `/book/js/nl/myBookedCars/?_=${timeStamp}`,
      // unavailableCars: `/book/js/nl/unavailableCars/?_=${timeStamp}`,
      // availableFromCars: `/book/js/nl/availableFromCars/?_=${timeStamp}`,
      // specialLocations: `/book/js/nl/specialLocations/?_=${timeStamp}`,
      // specialIconLocations: `/book/js/nl/specialIconLocations/?_=${timeStamp}`,
      // electricCarEnergyLevels: `/book/js/nl/electricCarEnergyLevels/?_=${timeStamp}`,
      // freeFloatingGeoLocations: `/book/js/nl/freeFloatingGeoLocations/?_=${timeStamp}`,
    };
    const endpointKeys = Object.keys(endpointUrls);

    const requestInit = {
      method: 'GET'
    };

    return Promise.all(
      endpointKeys.map(key => fetch(endpointUrls[key], requestInit))
    )
      .then((responses) => {
        return Promise.all(responses.map(response => response.json()));
      })
      .then((endpointDataArray) => {
        const data = {};
        let i = 0;
        for (const key of endpointKeys) {
          data[key] = endpointDataArray[i];
          i += 1;
        }
        return dispatch(receiveData(data));
      });
    // TODO catch fetch error
  };
}
