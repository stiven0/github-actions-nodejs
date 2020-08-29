const { suma } = require('./index');

describe('testing index', () => {

    test('debe retornar un numero', () => {

        const result = suma(1, 10);
        expect(result).toEqual(11);

    });

});