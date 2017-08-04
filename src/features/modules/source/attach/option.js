import ReactDOM from 'react-dom';
/**
 * changes HTML structure by adding array
 * @param {array} sourceList
 * @param {Object} dataSourceAttr
 */
export default function attachSourceOption(sourceList, dataSourceAttr) {
    const select = document.createElement('select');
    ReactDOM.render(sourceList, select);
    document.querySelector(dataSourceAttr).innerHTML = select.firstChild.innerHTML;
}
