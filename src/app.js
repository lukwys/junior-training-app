import handler from "./handler"
import config from "./config"
import "./css/style.scss";

function bootstrap() {
    console.log("~ Bootstrapping App");

    console.log("~ Init select");

    const attr = config.select;
    handler.source.select(attr.inputs, attr.dataAttr, attr.sources, attr.order, attr.template, config.api.sources);
}
bootstrap();
