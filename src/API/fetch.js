export default function loadLeauge(token, url){
    const request = new Request(url, {
        method: 'GET',
        headers: {
            "X-Auth-Token" : token
        }
    });
    
    fetch(request)
      .then(response => response.json())
      .then(j => {
          const list = j.map(i => i.caption);
      });
}