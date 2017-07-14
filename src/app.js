import api from "./api"
import attach from "./attach"
import render from "./render"
import handler from "./handler"
import config from "./config"

import loadLeague from "./api/fetch"
import "./css/style.scss";

function bootstrap() {
    console.log("Bootstrapping App");

    api.load.league()
        .then(list => attach.select.league(
            render.select.league(list),
            config.select.attrData.league
        ));

    handler.select.league(config.select.attrData.league, config.select.attrData.team);
    handler.select.team(config.select.attrData.team, config.select.attrData.season);
  
    loadLeague("63e07dbf62ac463d9aa94a83443512ec", "http://api.football-data.org/v1/competitions")
        .then(j => {
               const list = j.map(i => i.caption);
               for(var i = 0; i < list.length; i++){
                   console.log(list[i]);
               }
                return list;
        });
}

bootstrap();
