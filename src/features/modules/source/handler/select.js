import api from '../api';
import selectModule from '../../select';
import attach from '../attach';
import render from '../render';
import handler from '../handler';

export default function handlerSourceSelect(inputsList, dataAttr, sourcesList, orderList, templates, sourcesConfig) {
    const dataSourceAttr = `[data-${dataAttr.dataSource}]`;
    const containerAttr = `[data-${dataAttr.container}]`;
    const searchResultAttr = `[data-${dataAttr.searchResult}]`;
    const inputDataset = dataAttr.input.replace(/-\w/g, match => match[1].toUpperCase());

    const order = orderList.map(e => e.slice());
    const getLoader = api.load.selectFactory(sourcesConfig);

    const paramList = {};
    let params = {};

    const inputs = {};
    Object.keys(inputsList).forEach(id => {
        inputs[id] = {
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

    let extended = [{
        outAttr: searchResultAttr,
        attach: attach.searchResult,
        render: render.searchResult,
        template: templates.results
    }];

    attach.option(render.option(sourcesList.slice(), templates.option), dataSourceAttr);

    const saveParamList = (element, resultList) => {
        paramList[element.id] = resultList;
    };

    const resetSelect = select => {
        delete params[select.id];
        delete paramList[select.id];

        handler.resetSelect(document.querySelector(select.inAttr));
    };

    const saveParam = (index, value) => {
        const elementId = extended[index].id;
        params[elementId] = paramList[elementId].find(e => e.name === value).id;

        extended
            .slice(index + 1, extended.length - 1)
            .forEach(resetSelect);
    };

    const sourceHandler = srcId => {
        params = {};

        extended = [
            ...order[srcId].map(name => {
                const input = inputs[name];
                input.load = getLoader(srcId, name);
                return input;
            }),
            extended[extended.length - 1]
        ];
        extended[extended.length - 1].load = getLoader(srcId, 'searchResult');

        attach.select(
            render.select(extended.slice(0, extended.length - 1), templates.input),
            containerAttr,
            searchResultAttr
        );

        extended[0].handler(params, extended[0], saveParamList);
    };
    sourceHandler(0);

    document.querySelector(dataSourceAttr)
        .addEventListener('change', event => sourceHandler(parseInt(event.target.value, 10)));

    document.querySelector(containerAttr).addEventListener('change', event => {
        const input = event.target.dataset[inputDataset];

        if (input !== undefined) {
            const index = extended.findIndex(e => e.id === input);

            saveParam(index, event.target.value);
            extended
                .find(e => e.id === input)
                .handler(
                params,
                extended[index + 1],
                saveParamList
                );
        }
    });
}