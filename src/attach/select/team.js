export default function team(teamsElement, inputDataAttr, team) {
    document.querySelector(`[data-${inputDataAttr}-out="${team}"]`).innerHTML = teamsElement.innerHTML;
    const input = document.querySelector(`[data-${inputDataAttr}="${team}"]`);
    input.removeAttribute("disabled");
    input.removeAttribute("placeholder");
}
