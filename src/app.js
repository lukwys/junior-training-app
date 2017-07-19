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
        league: {
            name: attr.league,
            load: api.load.league,
            attach: attach.select.league,
            handler: handler.select.league,
            render: render.select.league
        },
        team: {
            name: attr.team,
            load: api.load.team,
            attach: attach.select.team,
            handler: handler.select.team,
            render: render.select.team
        },
        season: {
            name: attr.season,
            load: api.load.season,
            attach: attach.select.season,
            handler: handler.select.season,
            render: render.select.season
        }
    });

    return document.getElementsByClassName("search-results")[0].appendChild(render.searchResult(api.searchResult()));

}
bootstrap();
