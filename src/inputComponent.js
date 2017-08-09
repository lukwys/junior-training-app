import React from 'react';
import { observer } from 'mobx-react';
import './css/input.scss';

import InputField from './inputFieldComponent';
import InputDataList from './inputDataListComponent';

const InputComponent = observer(
    class InputComponent extends React.Component {
        render() {
            return (
                <div className="item">
                    <InputField name={this.props.name}/>
                    <InputDataList name={this.props.name}/>
                    <div className="arrow" data-select--list={`dropdown-${this.props.name}`}>&#9662;</div>
                </div>
            );
        }
    }
);

export default InputComponent;
