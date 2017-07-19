export default function handlerSelect(params, nextElement) {
    nextElement.load(params)
        .then(list => nextElement.attach(
            nextElement.render(list, nextElement.template),
            nextElement
        ))
}
