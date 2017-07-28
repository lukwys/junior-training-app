import searchResult from '../../src/features/modules/select/render/searchResult';

describe('searchResult', () => {
    it('should math to Snapshot', () => {
        expect(searchResult({ h: 'b'})).toMatchSnapshot()
    });
});
