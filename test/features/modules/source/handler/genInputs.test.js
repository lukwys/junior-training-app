import genInputs from '../../../../../src/features/modules/source/handler/genInputs'

describe('f/m/source/handler/genInputs', () => {

    describe('when gets specified object as argument', () => {
        const config = {
            inputs: {t1: 'test1', t2: 'test2'},
            dataAttr: {input: '#test#'},
            template: {option: '#tmpl_test#'}
        };
        const result = genInputs(config);

        it('returned object should have 2 keys', () => {
            expect(Object.keys(result).length).toBe(2);
        });

        it('returned object should have correct key names and labels', () => {
            expect(result['t1'].id).toBe('t1');
            expect(result['t2'].id).toBe('t2');
            expect(result['t1'].label).toBe('test1');
            expect(result['t2'].label).toBe('test2');
        });

        it('returned object should have correct inAttr and outAttr', () => {
            expect(result['t1'].inAttr).toBe('[data-#test#=\'t1\']');
            expect(result['t2'].inAttr).toBe('[data-#test#=\'t2\']');
            expect(result['t1'].outAttr).toBe('[data-#test#-out=\'t1\']');
            expect(result['t2'].outAttr).toBe('[data-#test#-out=\'t2\']');
        });
    });

    describe('when gets specified object as argument', () => {
        const config = {
            inputs: {},
        };
        const result = genInputs(config);

        it('returned object should be empty', () => {
            expect(result).toEqual({});
        });
    });
});
