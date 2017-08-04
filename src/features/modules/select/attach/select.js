import ReactDOM from 'react-dom';
/**
 * allow edition of another selecor
 * @param {string} options
 * @param {Object} select
 */
export default function attachSelect(options, select) {
    ReactDOM.render(options, document.querySelector(select.outAttr));
    const input = document.querySelector(select.inAttr);
    input.removeAttribute('disabled');
    input.removeAttribute('placeholder');
}
