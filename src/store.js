import * as mobx from 'mobx';

export default mobx.observable({
    mobx,

    select: {},
    source: {
        inputs: {},
        paramList: {},
        params: {},
        currentSrc: mobx.observable.box(0)
    }
});
