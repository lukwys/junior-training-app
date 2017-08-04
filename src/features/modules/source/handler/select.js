import api from '../api';
import attach from '../attach';
import render from '../render';
import genInputs from './genInputs';
import saveParam from './saveParam';
import saveParamList from './saveParamList';

export default function handlerSourceSelect(store, config, apiSources) {
    const dataSourceAttr = `[data-${config.dataAttr.dataSource}]`;
    const containerAttr = `[data-${config.dataAttr.container}]`;
    const searchResultAttr = `[data-${config.dataAttr.searchResult}]`;
    const inputDataset = config.dataAttr.input.replace(/-\w/g, match => match[1].toUpperCase());

    const getLoader = api.load.selectFactory(apiSources);

    store.inputs = genInputs(config);

    let extended = [{
        outAttr: searchResultAttr,
        attach: attach.searchResult,
        render: render.searchResult,
        template: config.template.results
    }];

    attach.option(render.option(config.sources.slice(), config.template.option), dataSourceAttr);

    store.mobx.autorun(() => {
        store.params = {};

        extended = [
            ...config.order[store.currentSrc].map(name => {
                const input = store.inputs[name];
                input.load = getLoader(store.currentSrc, name);
                return input;
            }),
            extended[extended.length - 1]
        ];
        extended[extended.length - 1].load = getLoader(store.currentSrc, 'searchResult');

        attach.select(
            render.select(extended.slice(0, extended.length - 1), config.template.input),
            containerAttr,
            searchResultAttr
        );

        extended[0].handler(store.params, extended[0], saveParamList(store));
    }, true);

    document.querySelector(dataSourceAttr)
        .addEventListener('change', event => store.currentSrc.set(parseInt(event.target.value, 10)));

    document.querySelector(containerAttr).addEventListener('change', event => {
        const input = store.inputs[event.target.dataset[inputDataset]];

        if (input !== undefined) {
            input.value.set(event.target.value);
            const index = extended.findIndex(e => e.id === input);

            ({ newParams: store.params, newParamList: store.paramList } =
                saveParam(index, event.target.value, extended, store.params, store.paramList));

            extended[index]
                .handler(
                    store.params,
                    extended[index + 1],
                    saveParamList(store)
                );
        }
    });
}
