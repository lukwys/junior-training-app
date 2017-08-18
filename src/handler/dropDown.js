export default function dropdown() {
    document.body.addEventListener('click', event => {
        const item = event.target.closest('.item');
        console.log('pre ~ event.target', event.target);

        if (item) {
            const ul = item.getElementsByTagName('ul');

            console.log('mid ~ event.target', event.target);
            if (event.target.parentNode.getElementsByTagName('ul li')) {
                ul[0].classList.toggle('notVis');

                const input = item.querySelector('input');
                input.value = event.target.innerHTML;

                input.dispatchEvent(new InputEvent('change', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                }));
            }
        }
        else {
            document.querySelectorAll('.dropdowns:not(.notVis)').forEach(x => x.classList.add('notVis'));
        }
    });
}
