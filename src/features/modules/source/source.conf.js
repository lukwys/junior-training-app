export default {
    order: [
        ['season', 'league', 'team'],
        ['country', 'league', 'season', 'team']
    ],
    sources: [
        'football-data.org',
        'apifootball.com'
    ],
    dataAttr: {
        input: 'select--input',
        container: 'select--container',
        dataSource: 'select--data-source',
        searchResult: 'select--search-result'
    },
    inputs: {
        team: 'Teams',
        league: 'Leagues',
        season: 'Seasons',
        country: 'Countries'
    },
    template: {
        input: '<div class="item"><label for="{id}"><p>{label}</p></label>' +
        '<input list="" id="{id}" placeholder="" {inAttr} disabled />' +
        '<datalist id="" {outAttr}></datalist></div>',
        option: '<option value="{key}">{value}</option>',
        results: {
            table: '<thead></thead><tbody></tbody>',
            th: '',
            td: ''
        }
    }
};
