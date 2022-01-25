import'@testing-library/jest-dom';
import { retornaArreglo } from "../../base/07-deses-arr"

describe('Test desestructuracion', () => {
    
    test('debe de retornar un string y un numero ', () => {
        
        const [string, number] = retornaArreglo();

        expect([string, number]).toEqual(['ABC', 123]);
        expect(string).toBe('ABC');
        expect(typeof string).toBe('string');
        expect(number).toBe(123);

    })
    



})
