import React from 'react';

import Source from './sourceComponent';
import Selects from './selectsComponent';
import Results from './resultsComponent';

export default function AppComponent(props) {
    return (
        <div>
            <Source />
            <Selects />
            <Results />
        </div>
    );
}
