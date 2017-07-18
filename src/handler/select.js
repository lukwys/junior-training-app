export default function handlerSelect(inputDataAttr, next) {
    next.load(234)
        .then(list => next.attach(
            next.render(list),
            inputDataAttr,
            next.dataAttr
        ))
}
