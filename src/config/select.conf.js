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
    '<input list="{options}" id="{id}" placeholder="{placeholder}" {attr_in} disabled />' +
    '<datalist id="{options}" {attr_out}></datalist></div>',
    option: '<option value="{key}">{value}</option>',
    results: {
      table: '<thead></thead><tbody></tbody>',
      th: '',
      td: ''
    }
  }
};
