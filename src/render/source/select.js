export default function select(inputDataAttr, inputList) {
    const result = document.createElement("result");

    let placeholder = "Loading data";

    inputList
        .forEach(e => {
            const element = document.createElement("div");
            element.setAttribute("class", "item");

            element.innerHTML = `<label for="${e.name[0]}"><p>${e.name[1]}</p></label>` +
                `<input list="${e.name[2]}" id="${e.name[0]}" placeholder="${placeholder}" data-${inputDataAttr}="${e.name[0]}" disabled />` +
                `<datalist id="${e.name[2]}" data-${inputDataAttr}-out="${e.name[0]}"></datalist>`;
            placeholder = `Select ${e.name[0]} before`;

            result.appendChild(element)
        });

    return result
}
