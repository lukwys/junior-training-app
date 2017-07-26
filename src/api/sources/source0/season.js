export default function apiSrc0Season() {
    return () => {
        const list = [];
        let year = new Date().getFullYear();

        while (year > 2014) {
            list.push({ id: year, name: `Season ${year -= 1}` });
        }
        return new Promise(resolve => resolve(list));
    };
}
