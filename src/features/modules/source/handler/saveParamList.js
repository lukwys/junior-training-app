export default function saveParamList(store) {
    return (element, resultList) => {
        store.source.paramList[element.id] = resultList;
    };
}
