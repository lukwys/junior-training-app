export default function team(token, url) {
    const request = new Request(url, {
        method: 'GET',
        headers: {
            "X-Auth-Token": token
        }
    });

    return fetch(request)
        .then(response => response.json())
        .then(x => x.teams)
}
