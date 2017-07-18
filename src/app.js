import api from "./api"
import attach from "./attach"
import render from "./render"
import handler from "./handler"
import config from "./config"

import "./css/style.scss";

function bootstrap() {
    console.log("~ Bootstrapping App");

    console.log("~ Init select");

    const attr = config.select.attrData;
    handler.source.select(attr.dataSource, attr.container, attr.searchResult, attr.input, {
        league: { // TODO: After refactor api it will be: - league: attr.league,
            name: attr.league,
            load: api.load.league,
        },
        team: {
            name: attr.team,
            load: api.load.team,
        },
        season: {
            name: attr.season,
            load: api.load.season,
        }
    });
}

bootstrap();
