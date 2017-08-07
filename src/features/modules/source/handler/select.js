import api from '../api';
import attach from '../attach';
import components from '../components';
import genInputs from './genInputs';
import saveParam from './saveParam';
import saveParamList from './saveParamList';
import { store } from '../../../../store';

export default function handlerSourceSelect(config, apiSources) {
    const dataSourceAttr = `[data-${config.dataAttr.dataSource}]`;
    const containerAttr = `[data-${config.dataAttr.container}]`;
    const searchResultAttr = `[data-${config.dataAttr.searchResult}]`;
    const inputDataset = config.dataAttr.input.replace(/-\w/g, match => match[1].toUpperCase());

    const getLoader = api.load.selectFactory(apiSources);

    store.source.inputs = genInputs(config);

    let extended = [{
        outAttr: searchResultAttr,
        attach: attach.searchResult,
        components: components.searchResult,
        template: config.template.results
    }];

    attach.option(components.option(config.sources.slice(), config.template.option), dataSourceAttr);

    store.source.currentSrc.observe(({ newValue: newSrc }) => {
        store.source.params = {};

        extended = [
            ...config.order[newSrc].map(name => {
                const input = store.source.inputs[name];
                input.load = getLoader(newSrc, name);
                return input;
            }),
            extended[extended.length - 1]
        ];
        extended[extended.length - 1].load = getLoader(newSrc, 'searchResult');

        attach.select(
            components.select(extended.slice(0, extended.length - 1)),
            containerAttr,
            searchResultAttr
        );

        extended[0].handler(store.source.params, extended[0], saveParamList(store.source));
    }, true);

    document.querySelector(dataSourceAttr)
        .addEventListener('change', event => store.source.currentSrc.set(parseInt(event.target.value, 10)));

    document.querySelector(containerAttr).addEventListener('change', event => {
        const input = store.source.inputs[event.target.dataset[inputDataset]];

        if (input !== undefined) {
            input.value.set(event.target.value);
            const index = extended.findIndex(e => e.id === input);

            ({ newParams: store.source.params, newParamList: store.source.paramList } =
                saveParam(index, event.target.value, extended, store.source.params, store.source.paramList));

            extended[index]
                .handler(
                    store.source.params,
                    extended[index + 1],
                    saveParamList(store.source)
                );
        }
    });
}
