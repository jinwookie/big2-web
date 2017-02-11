import 'isomorphic-fetch';

function sendRequest(url, method = 'GET', body = null, headers = null) {
  const options = { method };

  if (body)
    options.body = headers && headers['Content-Type'] === 'application/json' ? JSON.stringify(body) : body;

  if (headers)
    options.headers = headers;

  return fetch(url, options).then(response => {
    if (!response.ok)
      throw response;
    return response;
  });
}

export function get(url, headers = null) {
  return sendRequest(url, 'GET', null, headers);
}

export function post(url, body = null, headers = null) {
  return sendRequest(url, 'POST', body, headers);
}

export function put(url, body = null, headers = null) {
  return sendRequest(url, 'PUT', body, headers);
}

export const del = (url, headers = null) => {
  return sendRequest(url, 'DELETE', null, headers);
};
