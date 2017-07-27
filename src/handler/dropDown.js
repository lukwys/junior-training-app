/**
 * function that enables custom menu dropdown list
 *
 */
export default function dropDown() {
    const testBox = document.querySelectorAll('[class^="dropdown"]');

    document.querySelector('.item').addEventListener('click', event => {
        const dropdown = Object.keys(testBox)
            .map(index => testBox[index])
            .find(elem => event.target.parentNode === elem.parentNode);

        if (dropdown !== undefined) {
            console.log(dropdown, dropdown.classList);
            dropdown.classList.toggle('visible');
            dropdown.classList.toggle('notVis');
        }
    });

    document.querySelector('.item').addEventListener('click', evnt => {
        if (evnt.target.tagName === 'LI') {
            const input = evnt.target.parentNode.parentNode.querySelector('input');
            input.value = evnt.target.innerHTML;
        }
    });
}
