import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { InputComponent as Input } from './input';

export const SelectsComponent = observer(
    class SelectsComponent extends React.Component {
        constructor(props) {
            super(props);

            this.props.state.selects.possibleValues.observe(({ newValue: arr, name: key }) => {
                if (arr !== undefined && this.lists[key] !== undefined) {
                    this.lists[key].replace(arr);
                }

                this.props.state.selects.currentOrder.slice(
                    this.props.state.selects.currentOrder.findIndex(e => e === key),
                    this.props.state.selects.currentOrder.length)
                    .forEach(e => {
                        if (this.lists[e] !== undefined) {
                            this.lists[e].replace([]);
                            this.props.state.selects.currentValues.set(e, '');
                        }
                    });
            });

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

                    this.prevComp.matches
                        .filter(e => e.name === val)
                        .forEach(e => {
                            this.props.state.selects.matchedValues.set(key, e.id);
                            this.prevComp.forKey = '';
                        });
                }
                else {
                    this.prevComp.forKey = '';
                }
            });

            document.addEventListener('click', event => {
                if (this.expendedDropdown !== undefined) {
                    this.expendedDropdown.style.display = 'none';
                }

                this.expendedDropdown = this.expendingDropdown;

                if (this.expendedDropdown !== undefined) {
                    delete this.expendingDropdown;
                    this.expendedDropdown.style.display = 'block';
                }
            });

            this.handler = this.handler.bind(this);
        }

        handler(event) {
            const item = event.target.closest('.item');

            if (item) {
                const dropdown = item.getElementsByTagName('ul');

                if (event.target.nodeName === 'LI') {
                    const input = item.querySelector('input');
                    input.value = event.target.innerHTML;

                    this.props.state.selects.currentValues.set(item.dataset.input, input.value);
                }
                else if (dropdown.length > 0 && dropdown[0].children.length > 0) {
                    this.expendingDropdown = dropdown[0];
                }
            }
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
                <div className="container" onClick={this.handler}>
                    {newInputs}
                </div>
            );
        }
    }
);
