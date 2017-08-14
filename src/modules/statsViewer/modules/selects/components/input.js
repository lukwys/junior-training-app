import React from 'react';
import { observer } from 'mobx-react';
import '../css/input.scss';

import InputDataList from './inputDataList';

const InputComponent = observer(
    class InputComponent extends React.Component {
        constructor(props) {
            super(props);

            this.handler = this.handler.bind(this);
        }

        handler(event) {
            this.props.values.set(this.props.name, event.target.value);
        }

        render() {
            return (
                <div className="item">
                    <input placeholder={this.props.name} onChange={this.handler} disabled={this.props.list.size === 0}/>

                    <InputDataList name={this.props.name} list={this.props.list} comp={this.props.comp} />
                    <div className="arrow">&#9662;</div>
                </div>
            );
        }
    }
);

export default InputComponent;
