/**
 * function returns json for futher use
 * @param {string} token api key
 * @param {string} url api url
 * @param {Object} params
 * @callback callback json
 * @return Promise
 */
export default function apiSrc0FetchRequest(token, url, params, callback) {
    return fetch(new Request(
        url.replace(/{(\w+)}/g, (m, param) => params[param].id), {
            method: 'GET',
            headers: { 'X-Auth-Token': token }
        }))
        .then(response => response.json())
        .then(callback);
}
