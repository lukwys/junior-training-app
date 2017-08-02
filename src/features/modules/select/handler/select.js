/**
 * returns promise
 * @param {Object} params
 * @param {Object} nextElement
 * @callback callback
 */

export default function handlerSelect(params, nextElement, callback) {
    nextElement.load(params)
        .then(list => {
            nextElement.attach(
                nextElement.components(list, nextElement.template),
                nextElement
            );

            if (typeof callback === 'function') {
                callback(nextElement, list);
            }
        });
}
