import select from '../../../../../src/features/modules/select/components/select';

describe('f/m/select/components/select', () => {
    it('should return array of strings', () => {
        const results = select([
            { name: '1234' },
            { name: 'xyzw' }
        ], 'abc-{key}');

        expect(results).toMatchSnapshot();
    });
});
