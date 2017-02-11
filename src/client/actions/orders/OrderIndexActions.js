import { OrderIndexActionConstants as C } from 'constants/orders';
import { OrderApi } from 'api';

export function getOrders() {
  return dispatch => {
    dispatch({ type: C.GET_REQUEST });
    const api = new OrderApi();

    return api.getOrders().then(orders => dispatch({ type: C.GET_SUCCESS, payload: orders }));
  };
}
