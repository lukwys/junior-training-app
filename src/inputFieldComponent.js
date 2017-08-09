import React from 'react';
import { observer } from 'mobx-react';
import './css/inputField.scss';

const InputFieldComponent = observer(
    class InputFieldComponent extends React.Component {
        render() {
            return (
                <input placeholder={this.props.name} disabled/>
            );
        }
    }
);

export default InputFieldComponent;
