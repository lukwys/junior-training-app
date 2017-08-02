// eslint-disable-next-line
import React from 'react';
/**
 * changes list of objects to list of strings that can be used in html tree
 * @param {array} sources
 * @param {string} template
 */

export default function SourceOption(sources) {
    return (<select>{sources.map(option => <option>{option}</option>)}</select>);
}
