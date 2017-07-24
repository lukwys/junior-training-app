export default function apiSrc1FetchRequest(token, url, params, callback) {
  return fetch(new Request(
    url.replace(/{(\w+)}/g, (m, param) => {
      if (param === 'season')
        return `&from=${params[param]}-07-01&to=${params[param] + 1}-07-01`;
      return params[param];
    }) + '&APIkey=' + token,
    { method: 'GET' }))
    .then(response => response.json())
    .then(callback);
}
