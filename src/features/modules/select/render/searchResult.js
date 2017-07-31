import React from 'react';
/**
 * generates table with results in html
 * @param {Object} results object that contains table elements
 * @return string with html table tags that contains searched results
 */
export default function renderSearchResult(results) {
    // eslint-disable-next-line
    class TableRows extends React.Component {
        // eslint-disable-next-line
        constructor(props) {
            super(props);
        }
        render() {
            const { data } = this.props;
            const headers = Object.keys(data).map(key =>
                <th>${key}</th>
            );
            const values = Object.keys(data).map(key =>
                <th>${data[key]}</th>
            );
            return (
                <table>
                    <tr>{headers}</tr>
                    <tr>{values}</tr>
                </table>
            );
        }
    }

    return <TableRows data={results} />;
}
