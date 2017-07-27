import source from './features/modules/source';
import './css/style.scss';

function bootstrap() {
    console.log('~ Bootstrapping App');

    console.log('~ Init select');
    source.bootstrap();
}
bootstrap();
