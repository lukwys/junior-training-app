/**
 * function that returns function that returns promise
 * @param {string} token api key
 * @param {string} url api url
 */
import fetchRequest from './fetchRequest';
import { store } from '../../../../../../store';

export default function apiSrc0SearchResult(token, url) {
    const parser = i => {
        const teamName = store.source.params.team.name;
        let goalFor = 0;
        let goalAgainst = 0;
        let points = 0;
        let won = 0;
        let lose = 0;
        let draw = 0;
        let homeTeam = i.result.goalsHomeTeam;
        let awayTeam = i.result.goalsAwayTeam;

        if (i.homeTeamName !== teamName) {
            homeTeam = i.result.goalsAwayTeam;
            awayTeam = i.result.goalsHomeTeam;
        }
        goalFor += homeTeam;
        goalAgainst += awayTeam;

        if (homeTeam > awayTeam) {
            points += 3;
            won += 1;
        }
        else if (goalFor === awayTeam) {
            points += 1;
            draw += 1;
        }
        else {
            points += 0;
            lose += 1;
        }

        return { goalFor, goalAgainst, points, won, draw, lose };
    };

    return params =>
        fetchRequest(token, url, params, json => json.fixtures
            .map(parser)
            .reduce((accum, curr) => {
                accum.goalFor += curr.goalFor;
                accum.goalAgainst += curr.goalAgainst;
                accum.points += curr.points;
                accum.won += curr.won;
                accum.draw += curr.draw;
                accum.lose += curr.lose;
                return accum;
            }, {
                played: 0,
                points: 0,
                won: 0,
                draw: 0,
                lose: 0,
                goalFor: 0,
                goalAgainst: 0
            })
        );
}
