export default function apiLoadSearchResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            'Played': 0,
            'Won': 0,
            'Drawn': 0,
            'Lost': 0,
            'Goal For': 0,
            'Goal Against': 0
        }), 700);
    })
}
