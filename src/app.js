import source from './features/modules/source';
import handler from './handler';
import './css/style.scss';
/**
 * Bootstrapping application
 */
function bootstrap() {
    console.log('~ Bootstrapping App');

    console.log('~ Init select');
    source.bootstrap();

    console.log('~ Init drop-down menu');
    handler.dropDown();
}

bootstrap();
