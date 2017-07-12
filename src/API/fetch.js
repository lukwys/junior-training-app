function loadDoc(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.football-data.org/v1/competitions", false);
    xhr.setRequestHeader("X-Auth-Token", "63e07dbf62ac463d9aa94a83443512ec");
    xhr.send();
    var data = xhr.responseText;
    var jasonResponse = JSON.parse(data);
    for(var i = 0; jasonResponse.length > i; i++){
        console.log(jasonResponse[i].caption);
    }
    
}
