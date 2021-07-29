
const personajes = ['goku', 'vegeta', 'trunks'];
const [,,p3] = personajes;

console.log(p3);


const userState = ( valor ) => {
    return [valor, ()=>{console.log('Hola mundo')}]
}

const [nombre, setNombre] = userState('Ruben');

console.log(nombre);
setNombre();
