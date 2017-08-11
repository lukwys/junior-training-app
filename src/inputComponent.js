import React from 'react';
import { observer } from 'mobx-react';
import './css/input.scss';

import InputField from './inputFieldComponent';
import InputDataList from './inputDataListComponent';

const InputComponent = observer(
    class InputComponent extends React.Component {
        constructor(props) {
            super(props);

            this.handler = this.handler.bind(this);
        }

        handler(event) {
            this.props.state.setValue(event.target.value);
            if (this.props.state.possibleValues.keys().find(e => e === event.target.value) !== undefined) {
                this.props.state.fetcher();
            }
        }

        render() {
            return (
                <div className="item">
                    {/* <InputField name={this.props.name} onChange={this.handler} /> */}
                    <input placeholder={this.props.name} onChange={this.handler} />
                    <InputDataList name={this.props.name} />
                    <div className="arrow" data-select--list={`dropdown-${this.props.name}`}>&#9662;</div>
                </div>
            );
        }
    }
);

export default InputComponent;
