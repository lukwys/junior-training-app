export default function render(i) {
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

    return {
        goalFor: goalFor,
        goalAgainst: goalAgainst,
        points: points
    }
}
