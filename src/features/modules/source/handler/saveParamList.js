export default function saveParamList(paramList) {
    return (element, resultList) => {
        paramList[element.id] = resultList;
    };
}
