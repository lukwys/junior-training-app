import api from "../../api"
import attach from "../../attach"
import render from "../../render"
import handler from "../../handler"

export default function handlerSourceSelect(inputsList, dataAttr, sourcesList, orderList, templates) {
    const dataSourceAttr = "data-" + dataAttr.dataSource;
    const containerAttr = "data-" + dataAttr.container;
    const inputAttr = "data-" + dataAttr.input;
    const inputDataset = dataAttr.input.replace(/-\w/g, match => match[1].toUpperCase());

    const order = orderList.map(e => e.slice());
    const template = Object.assign({}, templates);
    const params = {};

    const inputs = {};
    for (let id in inputsList) inputs[id] = {
        id: id,
        label: inputsList[id],
        inAttr: `${inputAttr}="${id}"`,
        outAttr: `${inputAttr}-out="${id}"`,
        attach: attach.select,
        handler: handler.select,
        render: render.select,
        template: template.option
    }

    let extended = [{
        load: api.load.searchResult,
        outAttr: dataAttr.searchResult,
        attach: attach.searchResult,
        handler: handler.searchResult,
        render: render.searchResult,
        template: template.results
    }];

    attach.source.option(render.source.option(sourcesList.slice(), template.option), dataSourceAttr);

    const sourceHandler = srcId => {
        extended = [
            ...order[srcId].map(name => {
                const input = inputs[name];
                input['load'] = api.load.selectFactory(srcId, name);
                return input
            }),
            extended[extended.length - 1]
        ];

        attach.source.select(
            render.source.select(extended.slice(0, extended.length - 1), template.input),
            containerAttr
        );

        extended[0].handler(params, extended[0])
    };
    sourceHandler(0);

    document.querySelector(`[${dataSourceAttr}]`)
        .addEventListener("change", event => sourceHandler(parseInt(event.target.value)));

    document.querySelector(`[${containerAttr}]`).addEventListener("change", event => {
        const input = event.target.dataset[inputDataset];
        extended.find(e => e.id === input).handler(params, extended[extended.findIndex(e => e.id === input) + 1])
    });
}
