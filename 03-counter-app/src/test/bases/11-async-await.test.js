import { getImagen } from "../../base/11-async-await";

describe('Test async await', () => {
  


    test('Test de imagen', async () => {
      const img = await getImagen();
      expect(img.includes('http')).toBe(true);
    });
    

});
