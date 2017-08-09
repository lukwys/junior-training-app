import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.scss';
import './css/global.scss';

import source from './features/modules/source';
import handler from './handler';

import App from './appComponent';

/**
 * Bootstrapping application
 */
function bootstrap() {
    console.log('~ Building Components');

    const appDock = document.createElement('div');
    appDock.setAttribute('id', 'app-root');
    document.body.appendChild(appDock);

    ReactDOM.render(<App />, appDock);

    console.log('~ Init select');
    source.bootstrap();

    console.log('~ Init drop-down menu');
    handler.dropDown();
}

console.log('~ Bootstrapping App');
bootstrap();
