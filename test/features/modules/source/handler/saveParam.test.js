import saveParam from '../../../../../src/features/modules/source/handler/saveParam';

describe('f/m/source/handler/saveParam', () => {
    const extended = [
        {id : 'testID1'},
        {id : 'testID2'}
    ];
    const params = {};
    const paramList = {
        'testID1': [
            {id: 555, name: 'testValue1'},
        ],
        'testID2': [
            {id: 120, name: 'testValue2'},
        ]
    };

    it('should return updated newParam and unchanged newParamList', () => {
        const value = 'testValue1';
        let index = 0;

        const result = saveParam(index, value, extended, params, paramList);

        expect(result).toEqual({
            newParams: {
                testID1: 555
            },
            newParamList: paramList,
        })
    })

    it('should return updated newParam and unchanged newParamList2', () => {
        const value = 'testValue2';
        let index = 1;
      
        const result = saveParam(index, value, extended, params, paramList);

        expect(result).toEqual({
            newParams: {
               testID2: 120
            },
            newParamList: paramList,
        })
    })
})