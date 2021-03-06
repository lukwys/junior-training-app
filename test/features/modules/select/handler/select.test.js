import select from '../../../../../src/features/modules/select/handler/select';

describe('f/m/select/handler/select', () => {
    const callbackMock = jest.fn();
    const params = {paramKey: 'paramValue'};
    const element = {
        load: jest.fn(() => new Promise(resolve => resolve('list'))),
        attach: jest.fn(),
        components: jest.fn(() => 'rendered value'),
        template: 'template value'
    };

    select(params, element, callbackMock);

    it('should call load only once and with proper parameters', () => {
        expect(element.load.mock.calls.length).toBe(1);
        expect(element.load.mock.calls[0][0]).toBe(params);
    });

    it('should call components only once and with proper parameters', () => {
        expect(element.components.mock.calls.length).toBe(1);
        expect(element.components.mock.calls[0][0]).toBe('list');
        expect(element.components.mock.calls[0][1]).toBe('template value');
    });

    it('should call attach only once and with proper parameters', () => {
        expect(element.attach.mock.calls.length).toBe(1);
        expect(element.attach.mock.calls[0][0]).toBe('rendered value');
        expect(element.attach.mock.calls[0][1]).toBe(element);
    });

    it('should call callback only once and with proper parameters', () => {
        expect(callbackMock.mock.calls.length).toBe(1);
        expect(callbackMock.mock.calls[0][0]).toBe(element);
        expect(callbackMock.mock.calls[0][1]).toBe('list');
    });
});
