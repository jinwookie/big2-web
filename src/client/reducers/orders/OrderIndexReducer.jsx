import { fromJS } from 'immutable';
import { OrderIndexActionConstants as C } from 'constants/orders';

const initialState = {
  isLoading: false,
  items: [ ]
};

export default function orderIndexReducer(state = initialState, action) {
  switch (action.type) {
  case C.GET_REQUEST:
    return state.set('isLoading', true);
  case C.GET_SUCCESS:
    return state.merge({
      isLoading: false,
      items: action.payload
    });
  case C.GET_ERROR:
    return state.merge({
      isLoading: false
    });
  default:
    return fromJS(state);
  }
}
