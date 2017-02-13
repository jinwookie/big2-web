import { GamesIndexConstants as C } from 'constants/games';
import { SessionApi } from 'api';

export const getGames = () => async dispatch => {
  try {
    dispatch({ type: C.SESSION_GET_REQUEST });
    const sessions = await SessionApi.getSessions();
    dispatch({ type: C.SESSION_GET_SUCCESS, payload: sessions });
    return sessions;
  } catch (err) {
    dispatch({ type: C.SESSION_GET_ERROR, payload: err, error: true });
    throw err;
  }
};

export const deleteSession = (id, index) => dispatch => {
  dispatch({ type: C.DELETE_REQUEST });
  SessionApi.deleteSession(id)
    .then(() => dispatch({ type: C.DELETE_SUCCESS, payload: { index } }))
    .catch(err => {
      dispatch({ type: C.DELETE_ERROR, payload: err, error: true });
      throw err;
    });
};
