import { PlayerFormConstants as C } from 'constants/players';
import { PlayerApi } from 'api';

export const getNew = () => ({ type: C.NEW });

export const getPlayer = id => {
  return async dispatch => {
    try {
      dispatch({ type: C.GET_REQUEST });
      const player = await PlayerApi.getPlayer(id);
      dispatch({ type: C.GET_SUCCESS, payload: player });
      return player;
    } catch (err) {
      dispatch({ type: C.GET_ERROR, payload: err, error: true });
      throw err;
    }
  };
};

//export const change = updateProp => ({ type: C.CHANGE, payload: updateProp });

export const change = updateProp => ({ type: C.CHANGE, payload: updateProp });

export const createPlayer = player => {
  return async dispatch => {
    try {
      dispatch({ type: C.SAVE_REQUEST });
      await PlayerApi.createPlayer(player);
      dispatch({ type: C.SAVE_SUCCESS });
      return;
    } catch (err) {
      dispatch({ type: C.SAVE_REJECTED, payload: err, error: true });
      throw err;
    }
  };
};

export const updatePlayer = (id, player) => {
  return async dispatch => {
    try {
      dispatch({ type: C.SAVE_REQUEST });
      await PlayerApi.updatePlayer(id, player);
      dispatch({ type: C.SAVE_SUCCESS });
      return;
    } catch (err) {
      dispatch({ type: C.SAVE_REJECTED, payload: err, error: true });
      throw err;
    }
  };
};
