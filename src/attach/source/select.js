export default function select(inputElements, containerDataAttr) {
    document.querySelector(`[data-${containerDataAttr}]`).innerHTML = inputElements.innerHTML;
}
