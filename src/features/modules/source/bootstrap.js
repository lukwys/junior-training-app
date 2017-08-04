import handler from './handler';
import config from './source.conf';
import api from './api.conf';

export default function bootstrap() {
    handler.select(config, api.sources);
}
