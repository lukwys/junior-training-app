export default function team(inputDataAttr, next) {
    next.load(234, 324)
        .then(list => next.attach(
            next.render(list),
            inputDataAttr,
            next.name[0]
        ))
}
