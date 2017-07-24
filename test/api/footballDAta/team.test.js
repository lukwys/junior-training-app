jest.mock('../../../src/api/sources/footballDAta/fetchRequest');

import team from '../../../src/api/sources/footballDAta/team';
import data from '../../../src/api/sources/footballDAta/__mocks__/testData';

describe('footballDAta team', () => 
    it('should return id and name', () => {
        team()().then(resp => {
            expect(resp).toEqual(data);
        });
    })
)
