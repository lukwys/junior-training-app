export default function apiLoadTeam() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            { id: 1, name: "Team 1A" },
            { id: 2, name: "Team 2B" },
            { id: 3, name: "Team 3C" },
            { id: 4, name: "Team 4D" },
            { id: 5, name: "Team 5E" },
            { id: 6, name: "Team 6F" }
        ]), 700);
    })
}
