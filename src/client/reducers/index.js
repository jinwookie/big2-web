import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import playersReducer from './players';
import gamesReducer from './games/GamesReducer';

export default combineReducers({
  routing: routerReducer,
  players: playersReducer,
  games: gamesReducer
});
