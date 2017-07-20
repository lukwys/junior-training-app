import api from "../../api"
import attach from "../../attach"
import render from "../../render"

export default function select(dataSourceDataAttr, containerDataAttr, searchResultDataAttr, inputDataAttr, inputs) {
    attach.source.option(dataSourceDataAttr);

    const order = [
        ['season', 'league', 'team'],
        ['league', 'season', 'team'],
    ];

    let extended = [{
        name: [""],
        dataAttr: searchResultDataAttr,
        load: api.load.searchResult,
        attach: attach.searchResult,
        render: render.searchResult
    }];

    const handler = srcId => {
        extended = [...order[srcId].map(name => inputs[name]), extended[extended.length - 1]];

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
    handler(0);

    document.querySelector(`[data-${dataSourceDataAttr}]`)
        .addEventListener("change", event => handler(event.target.value));

    document.querySelector(`[data-${containerDataAttr}]`).addEventListener("change", event => {
        const input = event.target.dataset['select-Input'];
        inputs[input].handler(inputDataAttr, extended[extended.findIndex(e => e.name[0] === input) + 1])
    });
}
