import select from "../../../../../src/features/modules/source/components/select"

describe('f/m/source/components/select', () => {
    it('should match to Snapshot', () => {
        const result = select([
            {
                id: 'test1',
                label: 'Test #1',
                inAttr: `[data-testsel='test1']`,
                outAttr: `[data-testsel-out='test1']`
            }
        ])
        expect(result).toMatchSnapshot(); 
    })
});
