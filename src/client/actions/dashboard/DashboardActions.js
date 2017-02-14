import { DashboardConstants as C } from 'constants/dashboard';
import { GameApi } from 'api';

export const getDashboard = () =>
  async dispatch => {
    try {
      dispatch({ type: C.GET_REQUEST });
      const dashboard = await GameApi.getDashboard();
      dispatch({ type: C.GET_SUCCESS, payload: dashboard });
      return dashboard;
    }
    catch (err) {
      dispatch({ type: C.GET_ERROR, payload: err, error: true });
      throw err;
    }
  };
