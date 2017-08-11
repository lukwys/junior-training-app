import React from 'react';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import './css/app.scss';

import Source from './sourceComponent';
import Selects from './selectsComponent';
import Results from './resultsComponent';


const order = [
    ['season', 'league', 'team'],
    ['country', 'league', 'season', 'team']
];


const AppComponent = observer(
    class AppComponent extends React.Component {
        constructor(props) { // TODO: Don't look at this
            super(props);

            this.sourceState = observable({
                currentApi: 0
            });

            this.selectsState = observable({
                currentOrder: [],
                currentValues: observable(new Map()),
                possibleValues: observable(new Map()),
                fetcher: () => {}
            });

            autorun(() => {
                this.selectsState.currentOrder = order[this.sourceState.currentApi];

                this.selectsState.fetcher = this.fetcher.bind(this.sourceState.currentApi);
            });
        }

        fetcher(api, type, parameters) {
            console.log(' ~`~`~ ');
            console.log('~ Api', api);
            console.log('~ Type', type);
            console.log('~ Parameters', parameters);

            this.selectsState.possibleValues.set(type, ['Aaa', 'Bbb']);
        }
        // TODO: OPT: If old is not prefix of new

        render() {
            return (
                <div className="main">
                    <Source state={this.sourceState}/>
                    <Selects state={this.selectsState}/>
                    <Results />
                </div>
            );
        }
    }
);

export default AppComponent;
