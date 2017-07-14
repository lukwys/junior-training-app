export default function team(teamsElement, teamDataAttr) {
    document.querySelector(`[${teamDataAttr}-out]`).innerHTML = teamsElement.innerHTML;
    const input = document.querySelector(`[${teamDataAttr}]`);
    input.removeAttribute("disabled");
    input.removeAttribute("placeholder");
}
