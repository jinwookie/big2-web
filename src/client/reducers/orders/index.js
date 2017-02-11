import { combineReducers } from 'redux';
import OrderIndexReducer from './OrderIndexReducer';
import SingleOrderReducer from './SingleOrderReducer';

export default combineReducers({
  index: OrderIndexReducer,
  edit: SingleOrderReducer
});
