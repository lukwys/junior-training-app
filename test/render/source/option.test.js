import option from "../../../src/render/source/option"

describe('render/source/option', () => {
    it('should match to Snapshot', () => {
        
        const results = option([
            {index: "qwer", source: "1234"},
            {index: "rock", source: "0987"}
        ], "lorem_{key}_{value}")
        expect(results).toMatchSnapshot();
    })
});
