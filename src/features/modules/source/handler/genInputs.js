import selectModule from '../../select';

export default function genInputs(config) {
    const result = {};

    Object.keys(config.inputs).forEach(id => {
        result[id] = {
            id,
            label: config.inputs[id],
            inAttr: `[data-${config.dataAttr.input}='${id}']`,
            outAttr: `[data-${config.dataAttr.input}-out='${id}']`,
            attach: selectModule.attach.select,
            handler: selectModule.handler.select,
            components: selectModule.components.select,
            template: config.template.option
        };
    });

    return result;
}
