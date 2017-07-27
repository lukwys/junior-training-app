import sources from '../sources';

export default function apiLoadSelectFactory(sourcesConfig) {
    return (api, type) => sources[api][type](
        sourcesConfig[api].token,
        sourcesConfig[api].url[type]
    );
}
