/**
 * Function that enables custom menu drop-down list
 */
export default function dropDown() {
    document.querySelectorAll('[data-select--container]').forEach(container => {
        container.addEventListener('click', event => {
            const dropdown = event.target.parentNode.getElementsByTagName('ul');
            if (dropdown.length > 0) {
                dropdown[0].classList.toggle('notVis');
            }

            if (event.target.nodeName === 'LI') {
                const input = event.target.parentNode.parentNode.parentNode.querySelector('input');
                input.value = event.target.innerHTML;
                event.target.parentNode.parentNode.classList.toggle('notVis');
            }
        });
    });
}
