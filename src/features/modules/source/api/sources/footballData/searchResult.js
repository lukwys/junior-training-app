/**
 * function that returns function that returns promise
 * @param {string} token api key
 * @param {string} url api url
 */
import fetchRequest from './fetchRequest';

export default function apiSrc0SearchResult(token, url) {
    const parser = i => {
        let goalFor = 0;
        let goalAgainst = 0;
        let points = 0;
        let homeTeam = i.result.goalsHomeTeam;
        let awayTeam = i.result.goalsAwayTeam;

        if (i.homeTeamName !== 'Manchester United FC') {
            homeTeam = i.result.goalsAwayTeam;
            awayTeam = i.result.goalsHomeTeam;
        }
        goalFor += homeTeam;
        goalAgainst += awayTeam;

        if (homeTeam > awayTeam) {
            points += 3;
        }
        else if (goalFor === awayTeam) {
            points += 1;
        }
        else {
            points += 0;
        }

        return { goalFor, goalAgainst, points };
    };

    return params =>
        fetchRequest(token, url, params, json => json.fixtures
            .map(parser)
            .reduce((accum, curr) => {
                accum.goalFor += curr.goalFor;
                accum.goalAgainst += curr.goalAgainst;
                accum.points += curr.points;
                return accum;
            }, {
                played: 'todo',
                points: 0,
                won: 'todo',
                drawn: 'todo',
                lost: 'todo',
                goalFor: 0,
                goalAgainst: 0
            }) // TODO: Parser (include all stats)
        );
}
