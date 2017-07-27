
import source from './features/modules/source';
import handler from './handler';
import './css/style.scss';
/**
 * runs bootstrap
 */
function bootstrap() {
    console.log('~ Bootstrapping App');

    console.log('~ Drop Down Menu');
    handler.dropDown();

    console.log('~ Init select');
    source.bootstrap();
}

bootstrap();
