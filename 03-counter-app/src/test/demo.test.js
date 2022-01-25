

describe('Pruebas en el archivo demo.test.js', ()=>{

    test('Deben de ser iguales los estring', () => {
        const mensaje = 'hola mundo';
        
        const mensaje2 = 'hola mundo';
        
        expect(mensaje).toBe(mensaje2);        
        })



});



