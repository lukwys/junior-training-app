export default function renderSourceSelect(inputs, template) {
    const result = [];

    const getValue = {
        id: input => input.id,
        label: input => input.label,
        inAttr: input => input.inAttr.slice(1, input.inAttr.length - 1),
        outAttr: input => input.outAttr.slice(1, input.outAttr.length - 1)
    };

    inputs.forEach(input => result.push(
        template.replace(/{(\w+)}/g, (match, tag) => getValue[tag](input))
    ));

    return result;
}
