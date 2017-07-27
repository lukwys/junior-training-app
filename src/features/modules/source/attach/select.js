/**
 * resets table content
 * @param {Object} inputList
 * @param {string} containerAttr
 * @param {string} searchResult
 */
export default function attachSourceSelect(inputList, containerAttr, searchResult) {
    document.querySelector(containerAttr).innerHTML = inputList.join('');
    document.querySelector(searchResult).innerHTML = '';
}

