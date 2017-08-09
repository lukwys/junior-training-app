import React from 'react';
import { observer } from 'mobx-react';
import './css/source.scss';

const SourceComponent = observer(
    class SourceComponent extends React.Component {
        render() {
            return (
                <div className="container">
                    <div className="con-sel">
                        <select data-select--data-source/>
                        <div className="arrow">&#9662;</div>
                    </div>
                </div>
            );
        }
    }
);

export default SourceComponent;
