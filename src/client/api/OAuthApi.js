import * as FetchApi from './FetchApi';
import config from 'config';

const oauth = headers => {
  const requestHeaders = headers ? headers : { };
  return Object.assign({ Authorization: `Bearer ${config.api.token}` }, requestHeaders);
};

export const get = (url, headers = null) => FetchApi.get(url, oauth(headers));
export const post = (url, body = null, headers = null) => FetchApi.post(url, body, oauth(headers));
export const put = (url, body = null, headers = null) => FetchApi.put(url, body, oauth(headers));
export const del = (url, body = null, headers = null) => FetchApi.del(url, oauth(headers));
