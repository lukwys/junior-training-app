import option from "../../../../../src/features/modules/source/components/option"

describe('f/m/source/components/option', () => {
    it('should match to Snapshot', () => {      
        const results = option([
            {index: "qwer", source: "1234"},
            {index: "rock", source: "0987"}
        ], "lorem_{key}_{value}")
        expect(results).toMatchSnapshot(); 
        
        expect('').toBe('');
    })
});
