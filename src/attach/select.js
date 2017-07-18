export default function attachSelect(options, inputDataAttr, select) {
    console.log(`[data-${inputDataAttr}-out="${select}"]`);
    document.querySelector(`[data-${inputDataAttr}-out="${select}"]`).innerHTML = options.innerHTML;

    const input = document.querySelector(`[data-${inputDataAttr}="${select}"]`);
    input.removeAttribute("disabled");
    input.removeAttribute("placeholder");
}
