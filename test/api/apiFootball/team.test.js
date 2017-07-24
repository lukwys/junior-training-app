jest.mock('../../../src/api/sources/apiFootball/fetchRequest');

import team from '../../../src/api/sources/apiFootball/team';
import data from '../../../src/api/sources/apiFootball/__mocks__/testData'

describe('apiFootball team', () => {
    it('should return list id and name', () => {
        team()().then(resp => {
            expect(resp).toEqual(data);
        });
    })
})