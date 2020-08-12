const calcular = require('./functions')

test('adds 1 + 2 to equal 3', () => {
    expect(calcular(1, 2)).toBe(3);
});