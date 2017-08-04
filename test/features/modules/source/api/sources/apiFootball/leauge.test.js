jest.mock('../../../../../../../src/features/modules/source/api/sources/apiFootball/fetchRequest');

import league from '../../../../../../../src/features/modules/source/api/sources/apiFootball/league';
import data from '../../../../../../../src/features/modules/source/api/sources/apiFootball/__mocks__/testData';

describe('f/m/source/api/apiFootball/league', () =>
    it('should return id and name', () => {
        league()().then(resp => {
            expect(resp).toEqual(data);
        });
    })
);
