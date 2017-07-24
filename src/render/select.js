export default function renderSelect(options, template) {
  const result = [];

  const replacements = { key: 'name' };
  const getValue = (tag, option) => {
    let val = '';
    for (const key in replacements) {
      if (key === tag) {
        val = option[replacements[key]];
        break;
      }
    }
    return val;
  };

  options.forEach(option => result.push(template.replace(/{(\w+)}/g,
    (match, tag) => getValue(tag, option))));

  return result;
}
