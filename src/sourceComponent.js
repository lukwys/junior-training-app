import React from 'react';
import { observer } from 'mobx-react';
import './css/source.scss';

const SourceComponent = observer(
    class SourceComponent extends React.Component {
        constructor(props) {
            super(props);

            // this.handler = (function (event) {
            //     this.props.state.currentApi = parseInt(event.target.value, 10)
            // }).bind(this)

            this.handler = this.handler.bind(this);
        }

        handler(event) {
            this.props.state.currentApi = parseInt(event.target.value, 10);
        }

        render() {
            return (
                <div className="container">
                    <div className="con-sel">
                        <select onChange={this.handler} data-select--data-source>
                            <option value="0">Consectetur</option>
                            <option value="1">Accusamus</option>
                        </select>
                        <div className="arrow">&#9662;</div>
                    </div>
                </div>
            );
        }
    }
);

export default SourceComponent;
