export default function searchResult(resultList) {
    const result = document.createElement("results");

    const headers = document.createElement("tr");
    const values = document.createElement("tr");

    for (let e in resultList) {
        const th = document.createElement("th");
        const td = document.createElement("td");

        th.innerHTML = e;
        td.innerHTML = resultList[e]

        headers.appendChild(th);
        values.appendChild(td);
    }

    result.appendChild(headers);
    result.appendChild(values);

    return result;
}
