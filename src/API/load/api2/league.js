export default function league(url) {

    const request = new Request(url, {
        method: 'GET'
    });

    return fetch(request)
        .then(response => response.json())
}
    