/**
 * allow editing next list in the aplication
 * @param {string} options
 * @param {Object} select
 */

export default function attachSelect(options, select) {
    document.querySelector(select.outAttr).innerHTML = options.join('');

    const input = document.querySelector(select.inAttr);

    input.removeAttribute('disabled');
    input.removeAttribute('placeholder');
}
