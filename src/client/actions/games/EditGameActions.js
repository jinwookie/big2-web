import { SessionPlayerApi, GameApi } from 'api';
import { EditGameConstants as C } from 'constants/games';

export const getGame = sessionId => async dispatch => {
  dispatch({ type: C.GET_REQUEST });
  try {
    const players = await SessionPlayerApi.getPlayers(sessionId);
    const games = await GameApi.getGames(sessionId);
    const scores = players.map(player => ({
      id: player.playerid,
      score: ''
    }));
    dispatch({
      type: C.GET_SUCCESS,
      payload: {
        players,
        games,
        scores
      }
    });

    return { players, games };
  } catch (err) {
    dispatch({ type: C.GET_ERROR, payload: err, error: true });
    throw err;
  }
};

export const changeScore = (playerId, score, index) => {
  return {
    type: C.SCORE_CHANGE,
    payload: {
      id: playerId,
      score,
      index
    }
  };
};

export const addGame = (sessionId, scores) =>
  dispatch => {
    dispatch({ type: C.CREATE_REQUEST });
    const addScores = scores.reduce((acc, current) => {
      if (Number.isNaN(current.score) || current.score === '')
        return [ ...acc ];
      return [
        ...acc,
        {
          playerId: current.id,
          score: current.score
        }
      ];
    }, [ ]);

    return GameApi.createGame(sessionId, addScores)
      .then(() => dispatch({ type: C.CREATE_SUCCESS }))
      .catch(err => {
        dispatch({ type: C.CREATE_ERROR, payload: err, error: true });
        throw err;
      });
  };
