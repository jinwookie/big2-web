import * as FetchApi from './OAuthApi';
import config from 'config';

const url = config.api.url;

export const addPlayers = (sessionId, players) =>
  FetchApi.post(`${url}/sessions/${sessionId}/players`, players, { 'Content-Type': 'application/json' });

export const getPlayers = sessionId =>
  FetchApi.get(`${url}/sessions/${sessionId}/players`).then(response => response.json());
