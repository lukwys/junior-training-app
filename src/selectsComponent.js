import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import Input from './inputComponent';

const SelectsComponent = observer(
    class SelectsComponent extends React.Component {
        constructor(props) {
            super(props);

            this.props.state.selects.possibleValues.observe(({ newValue: arr, name: key }) => {
                if (arr !== undefined && this.lists[key] !== undefined) {
                    this.lists[key].replace(arr);
                }
            });

            // Optimization
            this.props.state.selects.currentValues.observe(({ newValue: val, name: key }) => {
                if (val !== undefined && val !== '') {
                    if (this.prevComp.prefix === undefined
                        || this.prevComp.forKey !== key
                        || !val.startsWith(this.prevComp.prefix)) {
                        this.prevComp.forKey = key;
                        this.prevComp.matches = [...this.lists[key]];
                    }
                    this.prevComp.prefix = val;
                    this.prevComp.matches = this.prevComp.matches.filter(e => e.name.startsWith(this.prevComp.prefix));
                    console.log(this.prevComp.matches.map(e => e.name));
                    this.prevComp.matches
                        .filter(e => e.name === val)
                        .forEach(e => {
                            this.props.state.selects.matchedValues.set(key, e.id);
                            this.prevComp.forKey = '';
                            console.log(this.props.state.selects.possibleValues);
                        });
                }
                else {
                    this.prevComp.forKey = '';
                }
            });
        }

        render() {
            this.lists = {};
            this.props.state.selects.possibleValues.keys().forEach(key => {
                this.lists[key] = observable(this.props.state.selects.possibleValues.get(key));
            });
            this.prevComp = observable({ forKey: '', prefix: undefined, matches: [] });

            this.props.state.selects.currentValues.clear();

            const newInputs = [];
            this.props.state.selects.currentOrder.forEach((key, index) => {
                this.props.state.selects.currentValues.set(key, '');

                if (this.lists[key] === undefined) {
                    this.lists[key] = observable([]);
                }

                newInputs.push(<Input name={key} key={`${this.props.state.source.currentApi}${index}`}
                                      list={this.lists[key]} comp={this.prevComp}
                                      values={this.props.state.selects.currentValues}/>);
            });

            return (
                <div className="container" data-select--container>
                    {newInputs}
                </div>
            );
        }
    }
);

export default SelectsComponent;
