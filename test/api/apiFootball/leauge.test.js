jest.mock('../../../src/features/modules/source/api/sources/apiFootball/fetchRequest');

import team from '../../../src/features/modules/source/api/sources/apiFootball/league';
import data from '../../../src/features/modules/source/api/sources/apiFootball/__mocks__/testData';

describe('apiFootball leauge', () =>
    it('should return id and name', () => {
        team()().then(resp => {
            expect(resp).toEqual(data);
        });
    })
);
