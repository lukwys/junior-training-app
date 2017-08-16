import React from 'react';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import '../css/statsViewer.scss';
import config from '../config';

import { Results, Selects, Source } from '../modules';

export const StatsViewerComponent = observer(
    class StatsViewerComponent extends React.Component {
        constructor(props) {
            super(props);

            this.localState = {
                source: observable({
                    currentApi: 0
                }),
                selects: observable({
                    currentOrder: observable([]),
                    matchedValues: observable(new Map()),
                    currentValues: observable(new Map()),
                    possibleValues: observable(new Map())
                }),
                results: observable({
                    table: {}
                })
            };

            this.localState.selects.matchedValues.observe(({ newValue: id, name: key }) => {
                const index = this.localState.selects.currentOrder.findIndex(e => e === key);

                if (index === this.localState.selects.currentOrder.length - 1) {
                    this.fetcher(this.localState.source.currentApi, 'search-result');
                }
                else {
                    this.fetcher(this.localState.source.currentApi, this.localState.selects.currentOrder[index + 1]);
                }
            });

            this.localState.selects.currentOrder.observe(() => {
                this.localState.selects.matchedValues.clear();
                this.localState.selects.possibleValues.clear();
                this.localState.results.table = {};

                this.fetcher(this.localState.source.currentApi, this.localState.selects.currentOrder[0]);
            });

            autorun(() => {
                this.localState.selects.currentOrder.replace(config.order[this.localState.source.currentApi]);
            });
        }

        // TODO: Replace mock-up with real API
        fetcher(api, type) {
            if (type === 'search-result') {
                this.localState.results.table = {
                    played: 0,
                    points: 0,
                    won: 0,
                    drawn: 0,
                    lost: 0,
                    goalFor: 0,
                    goalAgainst: 0
                };
            }
            else {
                const list = [{ id: 0, name: 'Lorem' }, { id: 1, name: 'Ipsum' }, { id: 2, name: 'Consectetur' },
                    { id: 3, name: 'Adipisicing' }, { id: 4, name: 'Adipisci' }, { id: 5, name: 'Alias' },
                    { id: 6, name: 'Commodi' }, { id: 7, name: 'Corporis' }, { id: 8, name: 'Delectus' },
                    { id: 9, name: 'Doloremque' }, { id: 10, name: 'Itaque' }, { id: 11, name: 'Magni' },
                    { id: 12, name: 'Perferendis' }, { id: 13, name: 'Possimus' }, { id: 14, name: 'Quibusdam' },
                    { id: 15, name: 'Quidem' }, { id: 16, name: 'Quisquam' }, { id: 17, name: 'Sapiente' },
                    { id: 18, name: 'Similique' }, { id: 19, name: 'Velit' }, { id: 20, name: 'Veritatis' }
                ];

                for (let i = list.length - 1; i >= 0; i--) {
                    const index = Math.floor(Math.random() * (i + 1));
                    list[i] = [list[index], list[index] = list[i]][0];
                }

                if (this.localState.selects.currentOrder.find(e => e === type)) {
                    this.localState.selects.possibleValues.set(type,
                        list.splice(0, Math.max(3, Math.random() * list.length / 2)));
                }
            }
        }

        render() {
            return (
                <div className="stats-viewer">
                    <Source state={this.localState.source} apiList={config.sources}/>
                    <Selects state={this.localState}/>
                    <Results state={this.localState.results}/>
                </div>
            );
        }
    }
);
