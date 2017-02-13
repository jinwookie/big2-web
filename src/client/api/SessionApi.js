import * as FetchApi from './OAuthApi';
import config from 'config';

const url = config.api.url;

export function createSession() {
  return FetchApi.post(`${url}/sessions`, null, { 'Content-Type': 'application/json' })
    .then(response => response.json());
}

export function getSessions() {
  return FetchApi.get(`${url}/sessions`).then(response => response.json());
}

export function deleteSession(id) {
  return FetchApi.del(`${url}/sessions/${id}`);
}
