export default function league(token, url) {
    const request = new Request(url, {
        method: 'GET',
        headers: {
            "X-Auth-Token": token
        }
    });

    return fetch(request)
        .then(response => response.json())
}
