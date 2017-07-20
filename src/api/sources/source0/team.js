import fetchRequest from './fetchRequest'

export default function apiSrc0Team(token, url) {
    return params =>
        fetchRequest(token, url, params, json => json.teams
            .map(i => {
                const id = i._links.self.href.split('/');
                return {id: id[id.length - 1], name: i.name}
            })
        )
}
