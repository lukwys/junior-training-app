import fetchRequest from './fetchRequest';

export default function apiSrc1Team(token, url) {
  return params =>
    fetchRequest(token, url, params, json => json
      .map(i => {
        return { id: i.league_id, name: i.league_name };
      })
    );
}
