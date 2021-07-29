//Desestructuracion

const person =
{
    nombre:'Ruben',
    dni: '04866609Q',
    edad: 24
};

const userContext = ({nombre, edad, rango = 'cap'}) => {
    return{
        nombreClave: nombre,
        anios: edad,
        lating:{
            lat:1223,
            lon:33333
        }
    }
}

const {nombreClave, anios, lating:{lat,lon}} = userContext(person)

console.log(`Años: ${anios}, nombre: ${nombreClave} y lat: ${lat}`);