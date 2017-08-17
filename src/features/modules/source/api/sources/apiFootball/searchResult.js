/**
 *Manchester Uniterd is hardcoded, it has to be changed
 * @param {string} token api key
 * @param {string} url api url
 *
 */

import fetchRequest from './fetchRequest';
import { store } from '../../../../../../store';

export default function apiSrc1SearchResult(token, url) {
    const parser = i => {
        const teamName = store.source.params.team.name;
        let goalFor = 0;
        let goalAgainst = 0;
        let points = 0;
        let won = 0;
        let lose = 0;
        let draw = 0;
        const team = [];

        if (i.match_hometeam_name === teamName) {
            team[0] = { first: i.match_hometeam_score, second: i.match_awayteam_score };
        }
        else if (i.match_awayteam_name === teamName) {
            team[0] = { second: i.match_hometeam_score, first: i.match_awayteam_score };
        }
        team.forEach(t => {
            if (!isNaN(parseInt(t.first, 10))) {
                goalFor += parseInt(t.first, 10);
                goalAgainst += parseInt(t.second, 10);

                if (t.first > t.second) {
                    points += 3;
                    won += 1;
                }
                else if (t.first === t.second) {
                    points += 1;
                    draw += 1;
                }
                else {
                    points += 0;
                    lose += 1;
                }
            }
        });

        return { goalFor, goalAgainst, points, won, draw, lose };
    };

    return params =>
        fetchRequest(token, url, params, json => json
            .map(parser)
            .reduce((accum, curr) => {
                accum['Goal For'] += curr.goalFor;
                accum['Goal Against'] += curr.goalAgainst;
                accum.Points += curr.points;
                accum.Won += curr.won;
                accum.Draw += curr.draw;
                accum.Lose += curr.lose;
                return accum;
            }, {
                'Played': 'todo',
                'Points': 0,
                'Won': 0,
                'Draw': 0,
                'Lose': 0,
                'Goal For': 0,
                'Goal Against': 0
            })
        );
}
