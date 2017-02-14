import { fromJS } from 'immutable';
import { DashboardConstants as C } from 'constants/dashboard';

const initialState = {
  isLoading: false,
  data: [ ]
};

export default (state = initialState, action) => {
  switch (action.type) {
  case C.GET_REQUEST:
    return state.set('isLoading', true);
  case C.GET_SUCCESS:
    return state.merge({
      isLoading: false,
      data: action.payload
    });
  case C.GET_ERROR:
    return state.set('isLoading', false);
  default:
    return fromJS(state);
  }
};
