import ReactDOM from 'react-dom';
/**
 * resets table content
 * @param {Object} inputList
 * @param {string} containerAttr
 * @param {string} searchResult
 */
export default function attachSourceSelect(inputList, containerAttr, searchResult) {
    const div = document.createElement('div');
    ReactDOM.render(inputList, div);
    document.querySelector(containerAttr).innerHTML = div.firstChild.innerHTML;

    document.querySelector(searchResult).innerHTML = '';
}

