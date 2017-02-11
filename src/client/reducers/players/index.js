import { combineReducers } from 'redux';
import PlayerIndexReducer from './PlayerIndexReducer';
import PlayerFormReducer from './PlayerFormReducer';

export default combineReducers({
  index: PlayerIndexReducer,
  form: PlayerFormReducer
});
