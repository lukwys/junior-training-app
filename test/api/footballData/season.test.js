import season from '../../../src/features/modules/source/api/sources/footballData/season';

describe('footballDAta seasons', () => {
    it('should return season list', () => {
        season()().then(resp => {
            expect(resp[0].name).toBe('Season 2016');
        });
    });
});