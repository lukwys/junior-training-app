import sources from '../sources';

export default function apiLoadSelectFactory(sourcesConfig) {
  return (api, type) => {
    console.log('# Debug\t| api:', api, 'type:', type);
    return sources[api][type](
      sourcesConfig[api].token,
      sourcesConfig[api].url[type]
    );
  };
}
