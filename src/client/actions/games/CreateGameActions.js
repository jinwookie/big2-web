import { PlayerApi, SessionApi, SessionPlayerApi } from 'api';
import { CreateGameConstants as C } from 'constants/games';

export const getPlayers = () => {
  return async dispatch => {
    dispatch({ type: C.PLAYERS_GET_REQUEST });
    try {
      const players = await PlayerApi.getPlayers();
      const mapped = players.map(player => ({
        isSelected: false,
        ...player
      }));
      dispatch({ type: C.PLAYERS_GET_SUCCESS, payload: mapped });
      return mapped;
    } catch (err) {
      dispatch({ type: C.PLAYERS_GET_ERROR, payload: err, error: true });
      throw err;
    }
  };
};

export const createGame = players => {
  return async dispatch => {
    dispatch({ type: C.CREATE_REQUEST });
    try {
      const session = await SessionApi.createSession();
      await SessionPlayerApi.addPlayers(session.id, players.map(player => player.id));
      return session;
    } catch (err) {
      dispatch({ type: C.CREATE_ERROR, payload: err, error: true });
      throw err;
    }
  };
};
