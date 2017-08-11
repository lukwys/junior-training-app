import React from 'react';
import { observer } from 'mobx-react';

import Input from './inputComponent';

const SelectsComponent = observer(
    class SelectsComponent extends React.Component {
        render() {
            this.props.state.currentValues.clear();

            const next = key => {
                const index = this.props.state.currentOrder.indexOf(this.props.state.currentOrder[key]);

                if (index === this.props.state.currentOrder.size - 1) {
                    return 'result';
                }
                return this.props.state.currentOrder[index + 1];
            };

            const newInputs = this.props.state.currentOrder.map((key, index) => {
                this.props.state.currentValues.set(key, '');

                const individualState = {
                    setValue: newValue => this.props.state.currentValues.set(key, newValue),
                    possibleValues: this.props.state.possibleValues.get(key),
                    fetcher: this.props.state.fetcher.bind(next(key), this.props.state.currentValues)
                };

                return <Input name={key} key={index} state={individualState}/>;
            });

            this.props.state.currentValues.observe(({ newValue: val }) => console.log(val));

            return (
                <div className="container" data-select--container>
                    {newInputs}
                </div>
            );
        }
    }
);

export default SelectsComponent;
