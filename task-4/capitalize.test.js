const capitalize = require('./capitalize');

test('capitalize', () =>{
    expect(capitalize('firstletter')).toBe('Firstletter')
})