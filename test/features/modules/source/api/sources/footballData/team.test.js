jest.mock('../../../../../../../src/features/modules/source/api/sources/footballData/fetchRequest');

import team from '../../../../../../../src/features/modules/source/api/sources/footballData/team';
import data from '../../../../../../../src/features/modules/source/api/sources/footballData/__mocks__/testData';

describe('footballDAta team', () => 
    it('should return id and name', () => {
        team()().then(resp => {
            expect(resp).toEqual(data);
        });
    })
);
