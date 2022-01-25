import'@testing-library/jest-dom'
import { getUsuarioActivo } from "../../base/05-funciones"

describe('Test sobre 05 funciones', () => {
    test('should ', () => {
        
const name = 'Rafa';
const objectResult={
    uid: 'ABC567',
    username: name
}
const result = getUsuarioActivo(name);
expect(result).toEqual(objectResult);

    })
    
})
