/**
 * add table as string to HTML structure
 * @param {string} table
 * @param {Object} select
 */
import ReactDOM from 'react-dom';

export default function attachSearchResult(table, select) {
    ReactDOM.render(table, document.querySelector(select.outAttr));
}
