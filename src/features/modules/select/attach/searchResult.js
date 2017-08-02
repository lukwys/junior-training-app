import ReactDOM from 'react-dom';
/**
 * add table as string to HTML structure
 * @param {string} table
 * @param {Object} select
 */

export default function attachSearchResult(table, select) {
    ReactDOM.render(table, document.querySelector(select.outAttr));
}
