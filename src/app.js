import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './component';

/**
 * Bootstrapping application
 */
function bootstrap() {
    console.log('~ Bootstrapping App');
    console.log('~ Building Components');

    const appDock = document.querySelector('#appDock');
    ReactDOM.render(<App />, appDock);
}

bootstrap();
