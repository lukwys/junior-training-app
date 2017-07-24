export default function handlerResetSelect(select) {
    const input = document.querySelector(`[${select.inAttr}]`);
    input.setAttribute('disabled', 'disabled');
    input.value = '';
}
