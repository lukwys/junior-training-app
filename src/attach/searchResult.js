export default function attachSearchResult(table, select) {
    document.querySelector(`[${select.outAttr}]`).innerHTML = table;
}
