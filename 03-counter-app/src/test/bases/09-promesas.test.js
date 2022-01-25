import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
  
    test('getHeroeByIdAsync debe de retornar un heroe Async', (done) => {
      
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual(heroes.find(x=> x.id === id));
                done();
            })

    });

    test('Error si heroe no existe', (done) => {
      
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( error =>{
                expect( error).toBe('No se pudo encontrar el héroe');
                done();
            }
                
            );

    });
    
    
    

});
