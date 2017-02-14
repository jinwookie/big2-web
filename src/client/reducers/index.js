import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import playersReducer from './players';
import gamesReducer from './games/GamesReducer';
import dashboardReducer from './dashboard/DashboardReducer';

export default combineReducers({
  routing: routerReducer,
  players: playersReducer,
  games: gamesReducer,
  dashboard: dashboardReducer
});
