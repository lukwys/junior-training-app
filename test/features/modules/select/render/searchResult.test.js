import searchResult from '../../../../../src/features/modules/select/render/searchResult';

describe('f/m/select/render/searchResult', () => {
    it('should math to Snapshot', () => {
        expect(searchResult({ h: 'b'})).toMatchSnapshot()
    });
});
