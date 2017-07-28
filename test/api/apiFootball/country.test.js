jest.mock('../../../src/features/modules/source/api/sources/apiFootball/fetchRequest');

import team from '../../../src/features/modules/source/api/sources/apiFootball/country';
import data from '../../../src/features/modules/source/api/sources/apiFootball/__mocks__/testData';

describe('apiFootball country', () =>
    it('should return id and name', () => {
        team()().then(resp => {
            expect(resp).toBe(data);
        });
    })
);
