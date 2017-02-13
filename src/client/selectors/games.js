import { createSelector } from 'reselect';

export const createGameSelector = state => state.games.create.toJS();
export const indexGamesSelector = state => state.games.index.toJS();
export const editGameSelector = state => state.games.edit.toJS();

export const sessionSelector = sessionId => createSelector(
  indexGamesSelector,
  ({
    data: sessions
  }) => sessions.find(session => session.id === sessionId)
);

export const selectedPlayersSelector = createSelector(
  createGameSelector,
  ({
    data
  }) => data.filter(player => player.isSelected)
);

export const gamesSelector = createSelector(
  editGameSelector,
  ({
    players,
    games
  }) =>
    games.map(game => ({
      id: game.id,
      sessionid: game.sessionid,
      timestamp: game.timestamp,
      scores: players.map(player => {
        const gamePlayer = game.scores.find(score => score.playerid === player.playerid);
        if (gamePlayer) {
          return ({
            playerid: player.playerid,
            score: gamePlayer.score
          });
        }

        return ({
          playerid: player.playerid,
          score: 'N/A'
        });
      })
    })
  )
);

export const totalSelector = createSelector(
  gamesSelector,
  games =>
    games.reduce((acc, game) =>
      game.scores.map(score => {
        const found = acc.find(a => a.playerid === score.playerid);
        if (!found)
          return { playerid: score.playerid, score: isNaN(score.score) ? 0 : score.score };
        if (isNaN(score.score))
          return found;
        return { playerid: found.playerid, score: found.score + score.score };
      })
    , [ ])
);

export const averageSelector = createSelector(
  totalSelector,
  gamesSelector,
  (totals, games) =>
    totals.map(total => {
      const gamesPlayed = games.filter(game =>
        game.scores.some(score => score.playerid === total.playerid && !isNaN(score.score))
      );
      const avg = total.score / gamesPlayed.length;
      return {
        playerid: total.playerid,
        average: games.length > 0 ? Math.round(avg * 100) / 100 : 'N/A'
      };
    })
);
