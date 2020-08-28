const { suma } = require('./index');

describe('testing index', () => {

    test('debe retornar un numero', () => {

        const result = suma(1, 2);
        expect(typeof result).toBe('number');

    });

});