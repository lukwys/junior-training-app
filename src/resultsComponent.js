import React from 'react';
import { observer } from 'mobx-react';
import './css/results.scss';

const ResultsComponent = observer(
    class ResultsComponent extends React.Component {
        render() {
            return <div className="container" data-select--search-result/>;
        }
    }
);

export default ResultsComponent;
