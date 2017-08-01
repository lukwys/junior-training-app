/**
 * add table as string to HTML structure
 * @param {string} table
 * @param {Object} select
 */
export default function attachSearchResult(table, select) {
    document.querySelector(select.outAttr).innerHTML = table;
}
