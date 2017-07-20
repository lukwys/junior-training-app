export default function season(inputDataAttr, next) {
    next.load(234, 324, 243)
        .then(list => next.attach(
            next.render(list),
            inputDataAttr,
            next.name[0]
        ))
}