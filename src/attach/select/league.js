export default function league(leaguesElement, leagueDataAttr) {
    document.querySelector(`[${leagueDataAttr}-out]`).innerHTML = leaguesElement.innerHTML;
    const input = document.querySelector(`[${leagueDataAttr}]`);
    input.removeAttribute("disabled");
    input.removeAttribute("placeholder");
}
