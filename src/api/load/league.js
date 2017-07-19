export default function apiLoadLeague() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {id: 0, name: "Campeonato Brasileiro da Série A"},
            {id: 1, name: "Premier League 2017/18"},
            {id: 2, name: "Championship 2017/18"},
            {id: 3, name: "League One 2017/18"},
            {id: 4, name: "League Two 2017/18"},
            {id: 5, name: "Eredivisie 2017/18"},
            {id: 6, name: "Ligue 1 2017/18"},
            {id: 7, name: "Ligue 2 2017/18"},
            {id: 8, name: "1. Bundesliga 2017/18"},
            {id: 9, name: "2. Bundesliga 2017/18"}
        ]), 700);
    })
}
