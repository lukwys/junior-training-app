jest.mock('../../../src/api/sources/apiFootball/fetchRequest');

import team from '../../../src/api/sources/apiFootball/country';
import data from '../../../src/api/sources/apiFootball/__mocks__/testData';

describe('apiFootball country', () =>
    it('should return id and name', () => {
        team()().then(resp => {
            expect(resp).toBe(data);
        });
    })
)