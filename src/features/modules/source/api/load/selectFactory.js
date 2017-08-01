import sources from '../sources';

/**
 * return factory function
 * @param {Object} sourcesConfig list of objects with properties: token:string and url:object.
 * @return function which gets api and type params and then returns function that get params and return Promise.
 */
export default function apiLoadSelectFactory(sourcesConfig) {
    return (api, type) => sources[api][type](
        sourcesConfig[api].token,
        sourcesConfig[api].url[type]
    );
}
