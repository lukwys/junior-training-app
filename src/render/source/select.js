export default function renderSourceSelect(inputs, template) {
  const result = [];

  let placeholder = 'Loading data';

  const getValue = (tag, input) => {
    let val;
    switch (tag) {
      case 'id': val = input.id; break;
      case 'label': val = input.label; break;
      case 'options': val = input.id + '-options'; break;
      case 'placeholder': val = placeholder; break;
      case 'attr_in': val = input.inAttr; break;
      case 'attr_out': val = input.outAttr; break;
      default: val = ''; break;
    }
    return val;
  };

  inputs.forEach(input => {
    result.push(template.replace(/{(\w+)}/g,
      (match, tag) => getValue(tag, input)));

    placeholder = `Select ${input.id} before`;
  });

  return result;
}
