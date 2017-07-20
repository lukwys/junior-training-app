import api from "./api"
import attach from "./attach"
import render from "./render"
import handler from "./handler"
import config from "./config"
import "./css/style.scss";

function bootstrap() {
    console.log("~ Bootstrapping App");

    console.log("~ Init select");

    const attr = config.select.attrData;

    handler.source.select(attr.dataSource, attr.container, attr.searchResult, attr.input, {
        league: {
            name: attr.league,
            load: api.load.league,
            attach: attach.select.league,
            handler: handler.select.league,
            render: render.select.league
        },
        team: {
            name: attr.team,
            load: api.load.team,
            attach: attach.select.team,
            handler: handler.select.team,
            render: render.select.team
        },
        season: {
            name: attr.season,
            load: api.load.season,
            attach: attach.select.season,
            handler: handler.select.season,
            render: render.select.season
        }
    });

    return document.getElementsByClassName("search-results")[0].appendChild(render.searchResult(api.searchResult()));
    handler.select.league(config.select.attrData.league, config.select.attrData.team);
    handler.select.team(config.select.attrData.team, config.select.attrData.season);

    api.load.api1.league("63e07dbf62ac463d9aa94a83443512ec", "http://localhost:9000/api.football-data.org/v1/competitions/")
        .then(j => {
            const listLeauges = j.map(i => i.caption);
            console.log(listLeauges);
            return listLeauges;
        });

    api.load.api1.team("63e07dbf62ac463d9aa94a83443512ec", "http://localhost:9000/api.football-data.org/v1/competitions/401/teams")
        .then(j => {
            const listTeams = j.map(i => i.name);
            console.log(listTeams);
            return listTeams;
        });

    api.load.api1.season();

    api.load.api1.result('63e07dbf62ac463d9aa94a83443512ec', 'http://localhost:9000/api.football-data.org/v1/teams/66/fixtures?season=2015')
        .then(j => j
            .map(api.render.api1.render)
            .reduce((aggregator, current) => {
                aggregator.goalFor += current.goalFor;
                aggregator.goalAgainst += current.goalAgainst;
                aggregator.points += current.goalAgainst;
                return aggregator;
            }, { goalFor: 0, goalAgainst: 0, points: 0 }))
        .then(i => console.log(i));

    api.load.api2.league('http://localhost:9000/apifootball.com/api/?action=get_leagues&country_id=169&APIkey=23550c5bb46c58f23880492d13ee0d4d4b65916b98770e232cfe3d0f3c531bf8')
        .then(j => {
            const listLeauges = j.map(i => i.league_name);
            console.log(listLeauges);
            return listLeauges;
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });

    api.load.api2.team('http://localhost:9000/apifootball.com/api/?action=get_standings&league_id=62&APIkey=23550c5bb46c58f23880492d13ee0d4d4b65916b98770e232cfe3d0f3c531bf8')
        .then(j => {
            const listTeams = j.map(i => i.team_name);
            console.log(listTeams);
            return listTeams;
        });

    api.load.api2.result('http://localhost:9000/apifootball.com/api/?action=get_events&from=2015-08-01&to=2016-06-01&league_id=62&APIkey=23550c5bb46c58f23880492d13ee0d4d4b65916b98770e232cfe3d0f3c531bf8')
        .then(j => j
            .map(api.render.api2.render)
            .reduce((aggregator, current) => {
                aggregator.goalFor += current.goalFor;
                aggregator.goalAgainst += current.goalAgainst;
                aggregator.points += current.goalAgainst;
                return aggregator;
            }, { goalFor: 0, goalAgainst: 0, points: 0 }))
        .then(i => console.log(i));

}
bootstrap();
