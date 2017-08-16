import React from 'react';
import { observer } from 'mobx-react';
import '../css/results.scss';

export const ResultsComponent = observer(
    class ResultsComponent extends React.Component {
        render() {
            return <div className="container">
                {Object.keys(this.props.state.table).length === 0 ? '' :
                    <table>
                        <thead>
                        <tr>
                            {Object.keys(this.props.state.table).map((key, index) =>
                                <th key={index}>{key}</th>
                            )}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {Object.keys(this.props.state.table).map((key, index) =>
                                <td key={index}>{this.props.state.table[key]}</td>
                            )}
                        </tr>
                        </tbody>
                    </table>
                }
            </div>;
        }
    }
);
