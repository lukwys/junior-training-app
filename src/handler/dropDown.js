/**
 * Function that enables custom menu drop-down list
 */
export default function dropDown() {
    document.querySelectorAll('[data-select--container]').forEach(container => {
        container.addEventListener('click', event => {
            const item = event.target.closest('.item');

            const dropdown = item.getElementsByTagName('ul');
            if (dropdown.length > 0 && dropdown[0].children.length > 0) {
                dropdown[0].style.display = dropdown[0].style.display === 'block' ? 'none' : 'block';
            }

            if (event.target.nodeName === 'LI') {
                const input = item.querySelector('input');
                input.value = event.target.innerHTML;
                // TODO: Trigger Input Event
            }
        });
    });
}
