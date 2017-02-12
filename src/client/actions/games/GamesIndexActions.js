import { GamesIndexConstants as C } from 'constants/games';
import { SessionApi } from 'api';

export const getGames = () => {
  return async dispatch => {
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
};
