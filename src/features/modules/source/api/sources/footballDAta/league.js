/**
 * list of objects
 * @param {string} token api key
 * @param {string} url api url
 * @return object that contains parameters
 */
import fetchRequest from './fetchRequest';

export default function apiSrc0League(token, url) {
    return params =>
        fetchRequest(token, url, params, json => json
            .map(i => ({ id: i.id, name: i.caption }))
        );
}
