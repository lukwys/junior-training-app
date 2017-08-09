import React from 'react';
import { observer } from 'mobx-react';
import './css/app.scss';

import Source from './sourceComponent';
import Selects from './selectsComponent';
import Results from './resultsComponent';

const AppComponent = observer(
    class AppComponent extends React.Component {
        render() {
            return (
                <div className="main">
                    <Source/>
                    <Selects/>
                    <Results/>
                </div>
            );
        }
    }
);

export default AppComponent;
