import * as FetchApi from './OAuthApi';
import config from 'config';

const url = config.api.url;

export const getPlayers = () =>
  FetchApi.get(`${url}/players`)
    .then(response => response.json());

export const getPlayer = id =>
  FetchApi.get(`${url}/players/${id}`)
    .then(response => response.json());

export const createPlayer = player =>
  FetchApi.post(`${url}/players`, player, { 'Content-Type': 'application/json' });

export const updatePlayer = (id, player) =>
  FetchApi.put(`${url}/players/${id}`, player, { 'Content-Type': 'application/json' });

export const deletePlayer = id => FetchApi.del(`${url}/players/${id}`);
