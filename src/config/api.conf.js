export default {
    sources: [
        {
            token: '63e07dbf62ac463d9aa94a83443512ec',
            url: {
                league: 'http://localhost:9000/api.football-data.org/v1/competitions/',
                team: 'http://localhost:9000/api.football-data.org/v1/competitions/{league}/teams',
                searchResult: 'http://localhost:9000/api.football-data.org/v1/teams/{team}/fixtures?season={season}'
            }
        },
        {
            token: '23550c5bb46c58f23880492d13ee0d4d4b65916b98770e232cfe3d0f3c531bf8',
            url: {
                country: 'http://localhost:9000/apifootball.com/api/?action=get_countries',
                league: 'http://localhost:9000/apifootball.com/api/?action=get_leagues&country_id={country}',
                team: 'http://localhost:9000/apifootball.com/api/?action=get_standings&league_id={league}',
                searchResult: 'http://localhost:9000/apifootball.com/api/?action=get_events&league_id={league}{season}'
            }
        }
    ]
};
