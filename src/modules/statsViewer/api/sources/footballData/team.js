/**
 * list of team with id's
 * @param {string} token api key
 * @param {string} url api url
 * @return function that returns promise that returns object with teams names and its "id"
 */

import fetchRequest from './fetchRequest';

export default function apiSrc0Team(token, url) {
    return params =>
        fetchRequest(token, url, params, json => json.teams
            .map(i => {
                // eslint-disable-next-line
                const id = i._links.self.href.split('/');
                return { id: id[id.length - 1], name: i.name };
            })
        );
}
