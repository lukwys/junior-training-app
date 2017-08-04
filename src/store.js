import * as mobx from 'mobx';

const store = mobx.observable({
    select: {},
    source: {
        inputs: {},
        paramList: {},
        params: {},
        currentSrc: mobx.observable.box(0)
    }
});

export { store, mobx };
