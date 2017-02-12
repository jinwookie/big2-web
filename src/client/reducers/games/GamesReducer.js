import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { CreateGameConstants as C, GamesIndexConstants as INDEX, EditGameConstants as EDIT } from 'constants/games';

const initialCreateState = {
  isLoading: false,
  isSaving: false,
  data: [ ]
};

const initialIndexState = {
  isLoading: false,
  data: [ ]
};

const initialEditState = {
  isLoading: false,
  isSaving: false,
  players: [ ],
  games: [ ],
  scores: [ ]
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
  case C.CHANGE:
    return state.merge({
      data: state.get('data').set(action.payload.index, state.get('data').get(action.payload.index).set('isSelected', action.payload.value))
    });
  default:
    return fromJS(state);
  }
};

const gamesIndexReducer = (state = initialIndexState, action) => {
  switch(action.type) {
  case INDEX.SESSION_GET_REQUEST:
    return state.merge({
      isLoading: true
    });
  case INDEX.SESSION_GET_SUCCESS:
    return state.merge({
      isLoading: false,
      data: action.payload
    });
  case INDEX.SESSION_GET_ERROR:
    return state.merge({
      isLoading: false
    });
  case INDEX.CREATE_REQUEST:
    return state.set('isSaving', true);
  case INDEX.CREATE_SUCCESS:
  case INDEX.CREATE_ERROR:
    return state.set('isSaving', false);
  default:
    return fromJS(state);
  }
};

const editGameReducer = (state = initialEditState, action) => {
  switch (action.type) {
  case EDIT.GET_REQUEST:
    return state.set('isLoading', true);
  case EDIT.GET_SUCCESS:
    return state.merge({
      isLoading: false,
      players: action.payload.players,
      games: action.payload.games,
      scores: action.payload.scores
    });
  case EDIT.GET_ERROR:
    return state.set('isLoading', false);
  case EDIT.SCORE_CHANGE:
    return state.merge({
      scores: state.get('scores').set(action.payload.index, state.getIn([ 'scores', action.payload.index ]).set('score', action.payload.score))
    });
  case EDIT.CREATE_REQUEST:
    return state.set('isSaving', true);
  case EDIT.CREATE_SUCCESS:
  case EDIT.CREATE_ERROR:
    return state.set('isSaving', false);
  default:
    return fromJS(state);
  }
};

export default combineReducers({
  index: gamesIndexReducer,
  create: createGameReducer,
  edit: editGameReducer
});
