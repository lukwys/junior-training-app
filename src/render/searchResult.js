export default function renderSearchResult(results) {
    const headers = [];
    const values = [];

    for (let e in results) {
        headers.push(`<th>${e}</th>`);
        values.push(`<td>${results[e]}</td>`);
    }

  return `<thead><tr>${headers.join('')}</tr></thead>` +
    `<tbody><tr>${values.join('')}</tr></tbody>`;
}
