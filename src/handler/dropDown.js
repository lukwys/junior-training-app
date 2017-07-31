/**
 * Function that enables custom menu drop-down list
 */
export default function dropDown() {
    const testBox = document.querySelectorAll('[class^="dropdown"]');

    document.querySelector('.item').addEventListener('click', event => {
        const dropdown = Object.keys(testBox)
            .map(index => testBox[index])
            .find(elem => event.target.parentNode === elem.parentNode);

        if (dropdown !== undefined) {
            dropdown.classList.toggle('visible');
            dropdown.classList.toggle('notVis');
        }

        if (event.target.tagName === 'LI') {
            const input = event.target.parentNode.parentNode.querySelector('input');
            input.value = event.target.innerHTML;
        }
    });
}
