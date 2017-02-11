import { fromJS } from 'immutable';
import { SingleOrderActionConstants as C } from 'constants/orders';

const initialState = {
  isLoading: false,
  order: { }
};

export default function singleOrderReducer(state = initialState, action) {
  switch (action.type) {
  case C.GET_REQUEST:
    return state.merge({
      isLoading: true,
      order: { }
    });
  case C.GET_SUCCESS:
    return state.merge({
      isLoading: false,
      order: action.payload
    });
  case C.CLEAR:
    return fromJS(initialState);
  default:
    return fromJS(state);
  }
}
