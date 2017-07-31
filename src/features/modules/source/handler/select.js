import * as mobx from 'mobx';
import api from '../api';
import attach from '../attach';
import render from '../render';
import genInputs from './genInputs';
import saveParam from './saveParam';
import saveParamList from './saveParamList';

export default function handlerSourceSelect(store, config, apiSources) {
    store.inputs = {};

    const dataSourceAttr = `[data-${config.dataAttr.dataSource}]`;
    const containerAttr = `[data-${config.dataAttr.container}]`;
    const searchResultAttr = `[data-${config.dataAttr.searchResult}]`;
    const inputDataset = config.dataAttr.input.replace(/-\w/g, match => match[1].toUpperCase());

    const getLoader = api.load.selectFactory(apiSources);
    const currentSrc = mobx.observable.box(0);
    store.paramList = {};
    store.params = {};
    Object.freeze(store.paramList);
    Object.freeze(store.params);

    store.inputs = genInputs(store, config);

    let extended = [{
        outAttr: searchResultAttr,
        attach: attach.searchResult,
        render: render.searchResult,
        template: config.template.results
    }];

    attach.option(render.option(config.sources.slice(), config.template.option), dataSourceAttr);

    mobx.autorun(() => {
        store.params = {};

        extended = [
            ...config.order[currentSrc].map(name => {
                const input = store.inputs[name];
                input.load = getLoader(currentSrc, name);
                return input;
            }),
            extended[extended.length - 1]
        ];
        extended[extended.length - 1].load = getLoader(currentSrc, 'searchResult');

        attach.select(
            render.select(extended.slice(0, extended.length - 1), config.template.input),
            containerAttr,
            searchResultAttr
        );

        extended[0].handler(store.params, extended[0], saveParamList(store));
    }, true);

    document.querySelector(dataSourceAttr)
        .addEventListener('change', event => currentSrc.set(parseInt(event.target.value, 10)));

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
