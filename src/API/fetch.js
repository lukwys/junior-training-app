function loadLeauge(token){
    //var token = "63e07dbf62ac463d9aa94a83443512ec"
    request = new Request('http://api.football-data.org/v1/competitions', {
        method: 'GET',
        headers: {
            "X-Auth-Token" : token
        }
    });
    
    fetch(request)
    .then(response => {
        return response.json();
    })
    .then(j => {
        j.map(i => console.log(i.caption));
        }
    );
}