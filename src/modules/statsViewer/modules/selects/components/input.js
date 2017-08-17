import React from 'react';
import { observer } from 'mobx-react';
import '../css/input.scss';

import { InputDataListComponent as InputDataList } from './inputDataList';

export const InputComponent = observer(
    class InputComponent extends React.Component {
        constructor(props) {
            super(props);

            this.handler = this.handler.bind(this);
        }

        handler(event) {
            this.props.values.set(this.props.name, event.target.value);
        }

        render() {
            const attributes = {};
            if (this.props.list.length === 0) {
                attributes.value = '';
                attributes.disabled = true;
            }
            else if (this.savedList !== this.props.list) {
                attributes.value = '';
                this.savedList = this.props.list;
            }

            return (
                <div className="item" data-input={this.props.name}>
                    <input placeholder={this.props.name} onChange={this.handler} {...attributes}/>

                    <InputDataList name={this.props.name} list={this.props.list} comp={this.props.comp} />
                    <div className="arrow">&#9662;</div>
                </div>
            );
        }
    }
);
