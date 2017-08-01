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
        input: '<div class="item">' +
        '<input placeholder="{label}" {inAttr} disabled/>' +
        '<ul class="dropdown-{id} dropdowns notVis" {outAttr}></ul>' +
        '<div class="arrow" data-select--list="dropdown-{id}">&#9662;</div>' +
        '</div>',

        li: '<li data-value="{key}">{key}</li>',
        option: '<option data-value="{key}">{value}</option>',
        results: {
            table: '<thead></thead><tbody></tbody>',
            th: '',
            td: ''
        }
    }
};
