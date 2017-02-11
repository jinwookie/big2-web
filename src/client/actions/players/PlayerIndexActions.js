import { PlayerIndexConstants as C } from 'constants/players';
import { PlayerApi as api } from 'api';

export const getPlayers = () => {
  return async dispatch => {
    try {
      dispatch({ type: C.GET_REQUEST });
      const players = await api.getPlayers();
      dispatch({ type: C.GET_SUCCESS, payload: players });
      return players;
    }
    catch (err) {
      dispatch({ type: C.GET_ERROR, payload: err, error: true });
      throw err;
    }
  };
};

export const deletePlayer = (id, index) => {
  return dispatch => {
    dispatch({ type: C.DELETE_REQUEST });
    return api.deletePlayer(id)
      .then(() => dispatch({ type: C.DELETE_SUCCESS, payload: index }))
      .catch(err => {
        dispatch({ type: C.DELETE_ERROR, payload: err, error: true });
        throw err;
      });
  };
};
