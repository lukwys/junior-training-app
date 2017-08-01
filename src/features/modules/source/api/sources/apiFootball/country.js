/**
 * list of counties with their id's
 * @param {string} token api key
 * @param {string} url api url
 * @return function that returns promise that returns list of objects with countries names pair with their id's
 */

import fetchRequest from './fetchRequest';

export default function apiSrc1Country(token, url) {
    return params =>
        fetchRequest(token, url, params, json => json
            .map(i => ({ id: i.country_id, name: i.country_name }))
        );
}
