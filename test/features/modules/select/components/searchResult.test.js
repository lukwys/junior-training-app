import searchResult from '../../../../../src/features/modules/select/components/searchResult';

describe('f/m/select/components/searchResult', () => {
    it('should math to Snapshot', () => {
        expect(searchResult({ h: 'b'})).toMatchSnapshot()
    });
});
