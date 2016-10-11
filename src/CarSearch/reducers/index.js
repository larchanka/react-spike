import { combineReducers } from 'redux';
import * as Actions from '../actions';
import * as FetchActions from '../actions/FetchActions';

/**
 * The selected google.maps.places.PlaceResult that has been entered into the place input.
 */
function selectedPlace(state = null, action) {
  switch (action.type) {
    case Actions.CHANGE_PLACE:
      return action.place;
    default:
      return state;
  }
}

const initialServerData = {
  isFetching: false,
  data: null
};
function serverData(state = initialServerData, action) {
  switch (action.type) {
    case FetchActions.REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      };
    case FetchActions.RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    default:
      return state;
  }
}

function mapBounds(state = null, action) {
  switch (action.type) {
    case Actions.CHANGE_MAP_BOUNDS:
      return action.mapBounds;
    default:
      return state;
  }
}

/**
 * The selected location from citiesAndLocations.
 */
function selectedLocation(state = null, action) {
  switch (action.type) {
    case Actions.CHANGE_SELECTED_LOCATION:
      return action.location;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedPlace,
  serverData,
  mapBounds,
  selectedLocation
});

export default rootReducer;
