/**
 * list of league names with id's
 * @param {string} token api key
 * @param {string} url api url
 * @return function that returns promise that returns list of objects with league name + it's id
 */

import fetchRequest from './fetchRequest';

export default function apiSrc1Team(token, url) {
    return params =>
        fetchRequest(token, url, params, json => json
            .map(i => ({ id: i.team_name, name: i.team_name }))
        );
}
