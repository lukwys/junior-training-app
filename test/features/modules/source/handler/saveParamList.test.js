import saveParamList from '../../../../../src/features/modules/source/handler/saveParamList';

describe('f/m/source/handler/saveParamList', () => {
    const store = {
        source: {
            paramList: {}
        }
    }
    const element = {
        id: 'testID1'
    };
    const resultList = [{ id: 555, name: 'testValue1' }];

    const result = saveParamList(store)(element, resultList);

    it('should return resultList', () => {
        expect(store.source.paramList).toEqual({
            testID1: [{ id: 555, name: 'testValue1' }]
        })
    })
})
