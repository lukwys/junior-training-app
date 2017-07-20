export default function league(leaguesElement, inputDataAttr, league) {
    document.querySelector(`[data-${inputDataAttr}-out="${league}"]`).innerHTML = leaguesElement.innerHTML;
    const input = document.querySelector(`[data-${inputDataAttr}="${league}"]`);
    input.removeAttribute("disabled");
    input.removeAttribute("placeholder");
}
