import React from 'react';
import './css/app.scss';

import Source from './sourceComponent';
import Selects from './selectsComponent';
import Results from './resultsComponent';

export default function AppComponent(props) {
    return (
        <div className="main">
            <Source />
            <Selects />
            <Results />
        </div>
    );
}
