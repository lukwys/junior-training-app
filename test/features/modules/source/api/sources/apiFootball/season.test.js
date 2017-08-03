import seasons from '../../../../../../../src/features/modules/source/api/sources/apiFootball/season';

describe('apiFootball seasons', () => {
    const date = new Date().getFullYear();
    it('should return seasons list', () => {
        seasons()().then(resp => {
            expect(resp[0].name).toBe('Season 2017/2018');
        });
    });
});
