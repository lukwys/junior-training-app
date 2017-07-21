export default function apiSrc0FetchRequest(token, url, params, callback) {
  return fetch(new Request(
    url.replace(/{(\w+)}/g, (m, param) => params[param]), {
      method: 'GET',
      headers: { 'X-Auth-Token': token }
    }))
    .then(response => response.json())
    .then(callback);
}
