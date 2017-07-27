import fetchRequest from './fetchRequest';

export default function apiSrc1SearchResult(token, url) {
    const parser = i => {
        let goalFor = 0;
        let goalAgainst = 0;
        let points = 0;
        const team = [];

        if (i.match_hometeam_name === 'Manchester United') {
            team[0] = { first: i.match_hometeam_score, second: i.match_awayteam_score };
        }
        else if (i.match_awayteam_name === 'Manchester United') {
            team[0] = { second: i.match_hometeam_score, first: i.match_awayteam_score };
        }
        team.forEach(t => {
            if (!isNaN(parseInt(t.first, 10))) {
                goalFor += parseInt(t.first, 10);
                goalAgainst += parseInt(t.second, 10);

                if (t.first > t.second) {
                    points += 3;
                }
                else if (t.first === t.second) {
                    points += 1;
                }
            }
        });

        return { goalFor, goalAgainst, points };
    };

    return params =>
        fetchRequest(token, url, params, json => json
            .map(parser)
            .reduce((accum, curr) => {
                accum['Goal For'] += curr.goalFor;
                accum['Goal Against'] += curr.goalAgainst;
                accum.Points += curr.points;
                return accum;
            }, {
                'Played': 'todo',
                'Points': 0,
                'Won': 'todo',
                'Drawn': 'todo',
                'Lost': 'todo',
                'Goal For': 0,
                'Goal Against': 0
            }) // TODO: Parser (include all stats)
        );
}
