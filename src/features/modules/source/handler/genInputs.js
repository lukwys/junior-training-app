import selectModule from '../../select';

export default function genInputs(inputsList, dataAttr, templates) {
    const result = {};

    Object.keys(inputsList).forEach(id => {
        result[id] = {
            id,
            label: inputsList[id],
            inAttr: `[data-${dataAttr.input}='${id}']`,
            outAttr: `[data-${dataAttr.input}-out='${id}']`,
            attach: selectModule.attach.select,
            handler: selectModule.handler.select,
            render: selectModule.render.select,
            template: templates.option
        };
    });

    return result;
}
