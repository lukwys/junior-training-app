import api from '../api';
import attach from '../attach';
import render from '../render';
import genInputs from './genInputs';
import saveParam from './saveParam';
import saveParamList from './saveParamList';

export default function handlerSourceSelect(config, apiSources) {
    const dataSourceAttr = `[data-${config.dataAttr.dataSource}]`;
    const containerAttr = `[data-${config.dataAttr.container}]`;
    const searchResultAttr = `[data-${config.dataAttr.searchResult}]`;
    const inputDataset = config.dataAttr.input.replace(/-\w/g, match => match[1].toUpperCase());

    const getLoader = api.load.selectFactory(apiSources);
    let paramList = {};
    let params = {};
    Object.freeze(paramList);
    Object.freeze(params);

    const inputs = genInputs(config.inputs, config.dataAttr, config.templates);

    let extended = [{
        outAttr: searchResultAttr,
        attach: attach.searchResult,
        render: render.searchResult,
        template: config.template.results
    }];

    attach.option(render.option(config.sources.slice(), config.template.option), dataSourceAttr);

    const sourceHandler = srcId => {
        params = {};

        extended = [
            ...config.order[srcId].map(name => {
                const input = inputs[name];
                input.load = getLoader(srcId, name);
                return input;
            }),
            extended[extended.length - 1]
        ];
        extended[extended.length - 1].load = getLoader(srcId, 'searchResult');

        attach.select(
            render.select(extended.slice(0, extended.length - 1), config.template.input),
            containerAttr,
            searchResultAttr
        );

        extended[0].handler(params, extended[0], saveParamList(paramList));
    };
    sourceHandler(0);

    document.querySelector(dataSourceAttr)
        .addEventListener('change', event => sourceHandler(parseInt(event.target.value, 10)));

    document.querySelector(containerAttr).addEventListener('change', event => {
        const input = event.target.dataset[inputDataset];

        if (input !== undefined) {
            const index = extended.findIndex(e => e.id === input);

            ({ newParams: params, newParamList: paramList } =
                saveParam(index, event.target.value, extended, params, paramList));

            extended
                .find(e => e.id === input)
                .handler(
                    params,
                    extended[index + 1],
                    saveParamList(paramList)
                );
        }
    });
}
