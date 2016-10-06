import { combineReducers } from 'redux';
import * as Actions from '../actions';

function selectedPlace(state = null, action) {
  switch (action.type) {
    case Actions.CHANGE_PLACE:
      return action.place;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedPlace
});

export default rootReducer;
