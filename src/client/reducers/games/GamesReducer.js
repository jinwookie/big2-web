import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { CreateGameConstants as C } from 'constants/games';

const initialCreateState = {
  isLoading: false,
  isSaving: false,
  data: [ ]
};


const createGameReducer = (state = initialCreateState, action) => {
  switch (action.type) {
  case C.PLAYERS_GET_REQUEST:
    return state.merge({
      isLoading: true
    });
  case C.PLAYERS_GET_SUCCESS:
    return state.merge({
      isLoading: false,
      data: action.payload
    });
  case C.PLAYERS_GET_ERROR:
    return state.merge({
      isLoading: false
    });
  default:
    return fromJS(state);
  }
};

export default combineReducers({
  create: createGameReducer
});
