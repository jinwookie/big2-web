import { fromJS } from 'immutable';
import { PlayerFormConstants as C } from 'constants/players';

const initialState = {
  isLoading: false,
  isSaving: false,
  data: {
    firstname: '',
    lastname: ''
  }
};

export default function productFormReducer(state = initialState, action) {
  switch (action.type) {
  case C.NEW:
    return fromJS(initialState);
  case C.CHANGE:
    return state.merge({
      data: state.get('data').merge(action.payload)
    });
  case C.GET_REQUEST:
    return state.merge({
      isLoading: true,
      isSaving: false
    });
  case C.GET_SUCCESS:
    return state.merge({
      isLoading: false,
      data: action.payload
    });
  case C.GET_ERROR:
    return state.merge({
      isLoading: false
    });
  case C.SAVE_REQUEST:
    return state.merge({
      isSaving: true
    });
  case C.SAVE_SUCCESS:
  case C.SAVE_ERROR:
    return state.merge({
      isSaving: false
    });
  default:
    return fromJS(state);
  }
}
