import React from 'react';
import '../css/global.scss';

import { StatsViewer } from '../modules';

export class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <StatsViewer/>
            </div>
        );
    }
}
