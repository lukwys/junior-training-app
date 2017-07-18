export default function renderSelect(list) {
    const result = document.createElement("res");

    list.forEach(e => {
        console.log(e);
        const element = document.createElement("option");
        element.setAttribute("value", e.name);

        result.appendChild(element)
    });

    return result
}
