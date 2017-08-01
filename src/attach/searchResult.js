/**
 * attach elements to html(table)
 * @param {string} table
 * @param {Object} select
 */
export default function attachSearchResult(table, select) {
    document.querySelector(select.outAttr).innerHTML = table;
}
