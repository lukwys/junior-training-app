export default function renderSearchResult(resultList) {
  const headers = [];
  const values = [];

  for (const e in resultList) {
    headers.push(`<th>${e}</th>`);
    values.push(`<td>${resultList[e]}</td>`);
  }

  return `<thead><tr>${headers.join('')}</tr></thead>` +
    `<tbody><tr>${values.join('')}</tr></tbody>`;
}
