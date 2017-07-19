export default function attachSourceSelect(inputList, containerAttr) {
    document.querySelector(`[${containerAttr}]`).innerHTML = inputList.join('');
}
