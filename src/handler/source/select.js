import api from "../../api"
import attach from "../../attach"
import render from "../../render"
import handler from "../../handler"

export default function handlerSourceSelect(dataSourceDataAttr, containerDataAttr, searchResultDataAttr, inputDataAttr, inputsList) {
    attach.source.option(dataSourceDataAttr);

    const inputs = {};
    for (let i in inputsList) {
        inputs[i] = Object.assign({}, inputsList[i], {
            dataAttr: inputsList[i].name[0],
            attach: attach.select,
            handler: handler.select,
            render: render.select
        });
    }

    const order = [
        ['season', 'league', 'team'],
        ['league', 'season', 'team'],
    ];

    let extended = [{
        dataAttr: searchResultDataAttr,
        load: api.load.searchResult,
        attach: attach.searchResult,
        render: render.searchResult
    }];

    const sourceHandler = srcId => {

        extended = [
            ...order[srcId].map(name => inputs[name]),
            extended[extended.length - 1]
        ];

        attach.source.select(
            render.source.select(inputDataAttr, extended.slice(0, extended.length - 1)),
            containerDataAttr
        );

        extended[0].load()
            .then(list => extended[0].attach(
                extended[0].render(list),
                inputDataAttr,
                extended[0].name[0]
            ));
    };
    sourceHandler(0);

    document.querySelector(`[data-${dataSourceDataAttr}]`)
        .addEventListener("change", event => sourceHandler(event.target.value));

    document.querySelector(`[data-${containerDataAttr}]`).addEventListener("change", event => {
        const input = event.target.dataset['select-Input'];
        handler.select(inputDataAttr, extended[extended.findIndex(e => e.name[0] === input) + 1])
    });
}
