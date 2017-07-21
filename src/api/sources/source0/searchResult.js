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
    else if (goalFor == awayTeam) {
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
        accum['Goal For'] += curr.goalFor;
        accum['Goal Against'] += curr.goalAgainst;
        accum['Points'] += curr.points;
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
