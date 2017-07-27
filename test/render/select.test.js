import select from "../../src/render/select"

describe('render/select', () => {
    it('should return array of strings', () => {
        
        const results = select([
            {name: '1234'},
            {name: 'xyzw'}
        ], "abc-{key}")
        expect(results).toMatchSnapshot();
    })
});
