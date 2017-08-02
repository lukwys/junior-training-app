import handler from '../../select/handler/resetSelect';

export default function saveParam(index, value, extended, params, paramList) {
    const newParams = { ...params };
    const newParamList = { ...paramList };

    const elementId = extended[index].id;
    newParams[elementId] = newParamList[elementId].find(e => e.name === value).id;

    extended
        .slice(index + 1, extended.length - 1)
        .forEach(select => {
            delete newParams[select.id];
            delete newParamList[select.id];

            handler.resetSelect(document.querySelector(select.inAttr));
        });

    return { newParams: Object.freeze(newParams), newParamList: Object.freeze(newParamList) };
}
