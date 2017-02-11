import { SingleOrderActionConstants } from 'constants/orders';
import { OrderApi } from 'api';

export function getOrder(id) {
  return dispatch => {
    dispatch({ type: SingleOrderActionConstants.GET_REQUEST });
    const api = new OrderApi();
    const orderPromise = api.getOrder(id);

    return orderPromise.then(order => {
      dispatch({ type: SingleOrderActionConstants.GET_SUCCESS, payload: order });
      return order;
    });
  };
}

export function clear() {
  return {
    type: SingleOrderActionConstants.CLEAR
  };
}
