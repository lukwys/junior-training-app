export default function league(inputDataAttr, next) {
    next.load(234)
        .then(list => next.attach(
            next.render(list),
            inputDataAttr,
            next.name[0]
        ))
}
