import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('Prueba en 02-template-string.js', () => {


    test('Prueba getSaludo ', () => {
        
        const nombre = "ruben";

        const saludo = getSaludo( nombre );
        expect(saludo).toBe('Hola '+ nombre);

    }),
    test('Sin argumento debe devolver Carlos ', () => {
        
        const saludo = getSaludo( );
        expect(saludo).toBe('Hola Carlos')
    })
    
    
})
