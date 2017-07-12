import api from "./api"
import attach from "./attach"
import render from "./render"
import handler from "./handler"
import config from "./config"

function bootstrap() {
    console.log("Bootstrapping App");

    api.load.league()
        .then(list => attach.select.league(
            render.select.league(list),
            config.select.attrData.league
        ));

    handler.select.league(config.select.attrData.league, config.select.attrData.team);
    handler.select.team(config.select.attrData.team, config.select.attrData.season);
}

bootstrap();
