import React from 'react';
import { observer } from 'mobx-react';
import '../css/inputDataList.scss';

export const InputDataListComponent = observer(
    class InputDataListComponent extends React.Component {
        render() {
            return <ul className="dropdown">
                {this.props.comp.forKey === this.props.name && this.props.comp.matches.length > 0 ?
                    this.props.comp.matches.map(e => <li key={e.id}>{e.name}</li>)
                    : this.props.list.map(e => <li key={e.id}>{e.name}</li>)}
            </ul>;
        }
    }
);
