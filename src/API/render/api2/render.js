export default function render(i){
    let goalFor = 0;
    let goalAgainst = 0;
    let points = 0;
    let team = [];

    if (i.match_hometeam_name == "Manchester United") 
        team[0] = { first: i.match_hometeam_score, second: i.match_awayteam_score }
    else if (i.match_awayteam_name == "Manchester United") 
        team[0] = { second: i.match_hometeam_score, first: i.match_awayteam_score }

    team.forEach(t => {
        if (isNaN(parseInt(t.first))) 
            console.log("value is not a number")
        else {
            goalFor += parseInt(t.first, 10);
            goalAgainst += parseInt(t.second, 10);
            if (t.first > t.second) {
                points += 3;
            }
            else if (t.first == t.second) {
                points += 1;
            }
            else {
                points;
            }
        }
    });

    return {
        goalFor: goalFor,
        goalAgainst: goalAgainst,
        points: points
    }

}
