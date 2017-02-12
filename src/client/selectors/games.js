import { createSelector } from 'reselect';

export const createGameSelector = state => state.games.create.toJS();
export const indexGamesSelector = state => state.games.index.toJS();
export const editGameSelector = state => state.games.edit.toJS();

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
