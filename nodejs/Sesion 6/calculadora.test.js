const calculadora = require('./calculadora.js')

describe('calculadora', ()=>{
    test('add 1 + 2 to equal 3', ()=> {
        expect(calculadora.add(1,2)).toBe(3)
    })
    test('adds 1, 2, 3 to equal 6', () => {
        expect(calculator.add(1, 2, 3)).toBe(6);
    });
    test('adds 1, 2, 3, 4, 5, 6 to equal 6', () => {
        expect(calculadora.add(1, 2, 3, 4, 5, 6)).toBe(21);
    });
})