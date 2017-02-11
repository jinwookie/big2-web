import * as FetchApi from './FetchApi';
import config from 'config';

const url = config.api.url;

export const addPlayers = (sessionId, players) =>
  FetchApi.post(`${url}/sessions/${sessionId}/players`, players, { 'Content-Type': 'application/json' });
