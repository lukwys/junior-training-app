jest.mock('../../../../../../../src/features/modules/source/api/sources/footballData/fetchRequest');

import league from '../../../../../../../src/features/modules/source/api/sources/footballData/league';
import data from '../../../../../../../src/features/modules/source/api/sources/footballData/__mocks__/testData';

describe('f/m/source/api/footballData/league', () =>
    it('should return id and name', () => {
        league()().then(resp => {
            expect(resp).toEqual(data);
        });
    })
);
