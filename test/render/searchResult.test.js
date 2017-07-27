import searchResult from '../../src/render/searchResult';

describe('searchResult', () => {
    it('should math to Snapshot', () => {
        expect(searchResult({ h: 'b'})).toMatchSnapshot()
    });
});
