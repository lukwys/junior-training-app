import fetchRequest from './fetchRequest';

export default function apiSrc1Country(token, url) {
    return params =>
        fetchRequest(token, url, params, json => json
            .map(i => ({ id: i.country_id, name: i.country_name }))
        );
}
