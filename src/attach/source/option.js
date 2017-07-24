export default function attachSourceOption(sourceList, dataSourceAttr) {
  document.querySelector(`[${dataSourceAttr}]`).innerHTML = sourceList.join('');
}
