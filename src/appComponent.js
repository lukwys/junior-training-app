import React from 'react';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import './css/app.scss';

import Source from './sourceComponent';
import Selects from './selectsComponent';
import Results from './resultsComponent';

// TODO: Replace mock-up with order from config
const order = [
    ['season', 'league', 'team'],
    ['country', 'league', 'season', 'team']
];

const AppComponent = observer(
    class AppComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                source: observable({
                    currentApi: 0
                }),
                selects: observable({
                    currentOrder: observable([]),
                    matchedValues: observable(new Map()),
                    currentValues: observable(new Map()),
                    possibleValues: observable(new Map())
                })
            };

            this.state.selects.matchedValues.observe(({ newValue: id, name: key }) => {
                const index = this.state.selects.currentOrder.findIndex(e => e === key);

                if (index === this.state.selects.currentOrder - 1) {
                    this.fetcher(this.state.source.currentApi, 'search-result');
                }
                else {
                    this.fetcher(this.state.source.currentApi, this.state.selects.currentOrder[index + 1]);
                }
            });

            this.state.selects.currentOrder.observe(() => {
                this.state.selects.matchedValues.clear();
                this.state.selects.possibleValues.clear();

                this.fetcher(this.state.source.currentApi, this.state.selects.currentOrder[0]);
            });

            autorun(() => {
                console.log('autorun');
                this.state.selects.currentOrder.replace(order[this.state.source.currentApi]);
            });
        }

        // TODO: Replace mock-up with real API
        fetcher(api, type) {
            console.log(' ~`~`~ ');
            console.log('~ Api', api);
            console.log('~ Type', type);
            const m = ` ${this.state.selects.matchedValues.entries().map(e => e[0][0] + e[1])}`;

            if (this.state.selects.currentOrder.find(e => e === type)) {
                this.state.selects.possibleValues.set(type, [
                    { id: 0, name: `Aaa${m}` },
                    { id: 1, name: `Bbb${m}` },
                    { id: 2, name: `Ccc${m}` }
                ]);
            }
        }

        render() {
            return (
                <div className="main">
                    <Source state={this.state.source}/>
                    <Selects state={this.state}/>
                    <Results/>
                </div>
            );
        }
    }
);

export default AppComponent;
