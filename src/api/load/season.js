export default function apiLoadSeason() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {id: 1, name: "Season 2014"},
            {id: 2, name: "Season 2015"},
            {id: 3, name: "Season 2016"},
            {id: 4, name: "Season 2017"}
        ]), 700);
    })
}
