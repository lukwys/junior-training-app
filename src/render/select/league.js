export default function league(leaguesList) {
    const result = document.createElement("res");

    leaguesList
        .forEach(e => {
            const element = document.createElement("option");
            element.setAttribute("value", e.name);
            result.appendChild(element)
        });

    return result
}
