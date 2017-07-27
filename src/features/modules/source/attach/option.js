/**
 * changes HTML structure by adding array
 * @param {array} sourceList
 * @param {Object} dataSourceAttr
 */
export default function attachSourceOption(sourceList, dataSourceAttr) {
    document.querySelector(dataSourceAttr).innerHTML = sourceList.join('');
}
