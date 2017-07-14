import loadLeague from "./api/fetch"
import "./css/style.scss";

loadLeague("63e07dbf62ac463d9aa94a83443512ec", "http://api.football-data.org/v1/competitions")
  .then(j => {
           const list = j.map(i => i.caption);
           for(var i = 0; i < list.length; i++){
               console.log(list[i]);
           }
            return list;
  });