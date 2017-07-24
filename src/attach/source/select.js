export default function attachSourceSelect(inputList, containerAttr, searchResult) {
    document.querySelector(`[${containerAttr}]`).innerHTML = inputList.join('');
    document.querySelector(`[${searchResult}]`).innerHTML = '';
}
