import * as FetchApi from './FetchApi';
import config from 'config';

const url = config.api.url;

export function createGame(sessionId, game) {
  return FetchApi.post(`${url}/sessions/${sessionId}/games`, game, { 'Content-Type': 'application/json' })
    .then(response => response.json());
}

export function getGames(sessionId) {
  return FetchApi.get(`${url}/sessions/${sessionId}/games`).then(response => response.json());
}

export function getGame(sessionId, gameId) {
  return FetchApi.get(`${url}/sessions/${sessionId}/games/${gameId}`).then(response => response.json());
}
