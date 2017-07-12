export default function team(teamList) {
    const result = document.createElement("res");

    teamList
        .forEach(e => {
            const element = document.createElement("option");
            element.setAttribute("value", e);
            result.appendChild(element)
        });

    return result
}
