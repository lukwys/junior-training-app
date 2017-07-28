import resetSelect from '../../src/features/modules/select/handler/resetSelect';

describe('handler/resetSelect', () => {
    it('should remove value and set attribute disabled for received <input> element', () => {
        const inputElement = document.createElement('input');

        const valueMockProperty = jest.fn();
        inputElement.setAttribute = jest.fn();
        Object.defineProperty(inputElement, 'value', {set: valueMockProperty});

        resetSelect(inputElement);

        expect(valueMockProperty).lastCalledWith('');
        expect(inputElement.setAttribute).toBeCalledWith('disabled', 'disabled');
    })
});
