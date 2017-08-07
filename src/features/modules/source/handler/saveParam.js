import resetSelect from '../../select/handler/resetSelect';

export default function saveParam(index, value, extended, params, paramList) {
    const newParams = { ...params };
    const newParamList = { ...paramList };
    const elementId = extended[index].id;
    const elem = newParamList[elementId].find(e => e.name === value);

    if (elem !== undefined) {
        newParams[elementId] = elem.id;

        extended
            .slice(index + 1, extended.length - 1)
            .forEach(select => {
                delete newParams[select.id];
                delete newParamList[select.id];

                resetSelect(document.querySelector(select.inAttr));
            });
    }


    return { newParams, newParamList };
}
