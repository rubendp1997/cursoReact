const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'NY',
        zip: 392892,
        lat: 3838383,
        long: 83838388
    }
};

console.table({
    persona
});

console.log(persona);

//hacer copia sin apuntar a la misma direccion de memoria
const persona2 = {...persona};
console.log(persona2);
