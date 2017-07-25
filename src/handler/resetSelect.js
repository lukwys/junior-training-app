export default function handlerResetSelect(inputElement) {
    inputElement.setAttribute('disabled', 'disabled');
    inputElement.value = '';
}
