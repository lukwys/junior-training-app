import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.scss';

// import source from './features/modules/source';
// import handler from './handler';
// import './css/style.scss';
// import Select from './features/modules/select/components/select';

import App from './appComponent';

/**
 * Bootstrapping application
 */
function bootstrap() {
    console.log('~ Bootstrapping App');

    // console.log('~ Init select');
    // source.bootstrap();
    //
    // console.log('~ Init drop-down menu');
    // handler.dropDown();

    const appDock = document.createElement('div');
    document.body.appendChild(appDock);

    ReactDOM.render(<App />, appDock);
}

bootstrap();
