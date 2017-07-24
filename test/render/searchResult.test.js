import searchResult from '../../src/render/searchResult';

test('searchResult renderer when receive {h: b} should return head cell `h` and body cell `b`', () => {
  expect(searchResult({ h: 'b' }))
    .toBe('<thead><tr>' +
    '<th>h</th>' +
    '</tr></thead><tbody><tr>' +
    '<td>b</td>' +
    '</tr></tbody>');
});
