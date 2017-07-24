import fetchRequest from './fetchRequest';

export default function apiSrc0League(token, url) {
  return params =>
    fetchRequest(token, url, params, json => json
      .map(i => {
        return { id: i.id, name: i.caption };
      })
    );
}
