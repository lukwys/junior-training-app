export default function season() {
    const seasons = [2015, 2016, 2017];
    var year = new Date().getFullYear();

    if (seasons[seasons.length - 1] < year) {
        seasons.push(year);
    }
    return seasons;
}
