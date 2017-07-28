export default function attachSelect(options, select) {
    document.querySelector(select.outAttr).innerHTML = options.join('');

    const input = document.querySelector(select.inAttr);
    input.removeAttribute('disabled');
    input.removeAttribute('placeholder');
}
