import option from "../../../../../src/features/modules/source/components/option"

describe('f/m/source/components/option', () => {
    it('should match to Snapshot', () => {      
        const results = option(["fsdfdsf", "dsfsfd"])
        expect(results).toMatchSnapshot(); 
        
        expect('').toBe('');
    })
});
