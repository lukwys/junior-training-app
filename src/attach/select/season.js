export default function season(seasonsElement, inputDataAttr, season) {
    document.querySelector(`[data-${inputDataAttr}-out="${season}"]`).innerHTML = seasonsElement.innerHTML;
    const input = document.querySelector(`[data-${inputDataAttr}="${season}"]`);
    input.removeAttribute("disabled");
    input.removeAttribute("placeholder");
}
