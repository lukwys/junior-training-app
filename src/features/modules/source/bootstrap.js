import handler from './handler';
import config from './source.conf';
import api from './api.conf';

export default function bootstrap() {
    handler.select(config.inputs, config.dataAttr, config.sources, config.order, config.template, api.sources);
}
