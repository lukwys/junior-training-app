export default function season(seasonList) {
    const result = document.createElement("res");

    seasonList
        .forEach(e => {
            const element = document.createElement("option");
            element.setAttribute("value", e.name);
            result.appendChild(element)
        });

    return result
}
