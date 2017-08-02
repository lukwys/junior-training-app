// eslint-disable-next-line
import React from 'react';
/**
 * generates array of strings
 * @param {array} options list of strings with <li> tag
 * @param {string} template string with <li> tag
 * @return list with li elements saved as a strings
 */

export default function Select(options) {
    return (<ul>{options.map(i => <li>{i.name}</li>)}</ul>);
}

