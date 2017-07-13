function loadLeauge(){
    const url = 'http://api.football-data.org/v1/competitions';
    var request = new Request(url, {
        method: 'GET',
        headers: {
            "X-Auth-Token" : "63e07dbf62ac463d9aa94a83443512ec"
        }
    });
    fetch(request).then(function(response){
        return response.json();
    }).then(function(j){
        for(var i = 0; i < j.length;  i++){
            console.log(j[i].caption);
        }
    });
}