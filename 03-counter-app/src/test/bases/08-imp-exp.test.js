import'@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Test de 08', () => {
    test('Busqueda de heroe por id existe ', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('Busqueda de heroe por id no existe ', () => {

        const id = 99;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })

    test('Busqueda de heroe por no numero ', () => {

        const id = 'pepe';
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })

    test('Test DC heroes', () => {

        const owner = 'DC';

        const filteredArray = heroes.filter(h=> h.owner === owner);

        expect(getHeroesByOwner(owner)).toEqual(filteredArray);
        
    })
    test('Test marvel length', () => {
        const owner = 'Marvel';

        const sizeMarvel = heroes.filter(h=> h.owner === owner).length;

        expect(getHeroesByOwner(owner).length).toBe(sizeMarvel);
        
    })

    test('Test marvel length not exist owner length return 0', () => {
        const owner = 'German';

        const sizeMarvel = 0;

        expect(getHeroesByOwner(owner).length).toBe(sizeMarvel);
        
    })

    test('Test marvel length not exist owner return empty', () => {
        const owner = 'German';

        const sizeMarvel = [];

        expect(getHeroesByOwner(owner)).toEqual(sizeMarvel);
        
    })
    
    
    


})
