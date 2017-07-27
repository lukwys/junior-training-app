import select from "../../../src/render/source/select"

describe('render/source/select', () => {
    it('should match to Snapshot', () => {
        
        const results = select([{
            inAttr: "[data-test]",
            id: "rock",
            outAttr: '[kamienie]',
            label: "seed"
        }], "lorem_{inAttr}_{id}_{outAttr}_{label}")
        expect(results).toMatchSnapshot();
    })
});
