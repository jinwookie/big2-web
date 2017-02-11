import * as FetchApi from './FetchApi';
import config from 'config';

const url = config.api.url;

export function createSession() {
  return FetchApi.post(`${url}/sessions`, null, { 'Content-Type': 'application/json' })
    .then(response => response.json());
}