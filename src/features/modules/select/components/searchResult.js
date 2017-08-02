// eslint-disable-next-line
import React from 'react';
/**
 * generates table with results in html
 * @param {Object} results object that contains table elements
 * @return string with html table tags that contains searched results
 */

export default function TableRows(results) {
    const headers = Object.keys(results).map(key =>
        <th>{key}</th>
    );
    const values = Object.keys(results).map(key =>
        <td>{results[key]}</td>
    );
    return (
        <table>
            <tr>{headers}</tr>
            <tr>{values}</tr>
        </table>
    );
}
