jest.mock('../../../src/api/sources/footballDAta/fetchRequest');

import team from '../../../src/api/sources/footballDAta/league';
import data from '../../../src/api/sources/footballDAta/__mocks__/testData';

describe('footballDAta leauge', () =>
    it('should return id and name', () => {
        team()().then(resp => {
            expect(resp).toEqual(data);
        });
    })
)