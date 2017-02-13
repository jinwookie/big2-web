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
          score: parseInt(current.score)
        }
      ];
    }, [ ]);

    return GameApi.createGame(sessionId, addScores)
      .then(game => {
        game.scores = addScores.map(score => ({
          playerid: score.playerId,
          score: score.score
        }));
        dispatch({ type: C.CREATE_SUCCESS, payload: game });
      })
      .catch(err => {
        dispatch({ type: C.CREATE_ERROR, payload: err, error: true });
        throw err;
      });
  };

export const deleteGame = (sessionId, gameId, index) => dispatch => {
  dispatch({ type: C.DELETE_REQUEST });
  return GameApi.deleteGame(sessionId, gameId).then(dispatch({ type: C.DELETE_SUCCESS, payload: { index } }))
    .catch(err => {
      dispatch({ type: C.DELETE_ERROR, payload: err, error: true });
      throw err;
    });
};
