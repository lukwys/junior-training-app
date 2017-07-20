export default function handlerSelect(params, nextElement, callback) {
    nextElement.load(params)
        .then(list => {
            nextElement.attach(
                nextElement.render(list, nextElement.template),
                nextElement
            );

            if (typeof callback === 'function')
                callback(nextElement, list)
        })
}
