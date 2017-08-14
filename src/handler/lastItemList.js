export default function lastItemList() {
    const lastDropdownItem = event.target.getElementByTagName('li');
    console.log(lastDropdownItem);

    lastDropdownItem.addEventListener('click', () => {
        const lastClickedItem = event.target.value;
        console.log(lastClickedItem);
    });
}
