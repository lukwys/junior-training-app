jest.mock('../../../src/features/modules/source/api/sources/apiFootball/fetchRequest');

import team from '../../../src/features/modules/source/api/sources/apiFootball/team';
import data from '../../../src/features/modules/source/api/sources/apiFootball/__mocks__/testData'

describe('apiFootball team', () => {
    it('should return list id and name', () => {
        team()().then(resp => {
            expect(resp).toEqual(data);
        });
    })
});
