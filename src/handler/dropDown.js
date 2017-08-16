/**
 * Function that enables custom menu drop-down list
 */
export default function dropDown() {
    let lastClicked;
    document.addEventListener('click', event => {
        lastClicked = event.target;
        const dropdown = event.target.parentNode.getElementsByTagName('ul');


        if (event.target.nodeName === 'LI') {
            const input = event.target.parentNode.parentNode.parentNode.querySelector('input');
            input.value = event.target.innerHTML;
            event.target.parentNode.parentNode.classList.toggle('notVis');
        }
        else if (lastClicked) {
            dropdown[0].classList.toggle('notVis');
            console.log(lastClicked);
            lastClicked = undefined;
            console.log(lastClicked);
        }
    });
}
