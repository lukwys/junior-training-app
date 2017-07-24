export default function renderSearchResult(results) {
    const headers = Object.keys(results).map(key => `<th>${key}</th>`);
    const values = Object.keys(results).map(key => `<th>${results[key]}</th>`);

    return `<thead><tr>${headers.join('')}</tr></thead>` +
        `<tbody><tr>${values.join('')}</tr></tbody>`;
}
