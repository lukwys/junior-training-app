export default function saveParamList(store) {
    return function (element, resultList) {
        store.source.paramList[element.id] = resultList;
    };
}
