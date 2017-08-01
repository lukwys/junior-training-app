/**
 * attach elements to html
 * @param {array} sourceList
 * @param {string} dataSourceAttr
 */
export default function attachSourceOption(sourceList, dataSourceAttr) {
    document.querySelector(dataSourceAttr).innerHTML = sourceList.join('');
}
