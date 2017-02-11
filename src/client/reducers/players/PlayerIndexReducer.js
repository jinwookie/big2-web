import { fromJS } from 'immutable';
import { PlayerIndexConstants as C } from 'constants/players';

const initialState = {
  isLoading: false,
  isDeleting: false,
  data: [ ]
};

export default function productIndexReducer(state = initialState, action) {
  switch (action.type) {
  case C.GET_REQUEST:
    return state.set('isLoading', true);
  case C.GET_SUCCESS:
    return state.merge({
      isLoading: false,
      data: action.payload
    });
  case C.GET_ERROR:
    return state.merge({
      isLoading: false
    });
  case C.DELETE_REQUEST:
    return state.merge({
      isDeleting: true
    });
  case C.DELETE_SUCCESS:
    return state.merge({
      isDeleting: false,
      data: state.get('data').delete(action.payload)
    });
  case C.DELETE_ERROR:
    return state.merge({
      isDeleting: false
    });
  default:
    return fromJS(state);
  }
}
