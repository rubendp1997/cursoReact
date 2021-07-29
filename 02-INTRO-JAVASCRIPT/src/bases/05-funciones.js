
const saludar = function (nombre){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`

const saludar4 = () => `Hola, Mundo`;


console.log(saludar('Pepe'));
console.log(saludar3(34));

console.log(saludar4())

function getUsuarioActivo(nombre){
    return{
        uid: 'prueba',
        username: nombre
    }
}

//Funcion de flecha 
const usuarioAct = (nombre) =>{
    return {
        uid: 'test',
        name: nombre
    }
}

//Retorno de objeto implicito
const usuarioAct2 = (nombre) =>
     ({
        uid: 'test',
        name: nombre
    })


console.log(usuarioAct('Pepe'));

console.log(usuarioAct2('Pepe2'));

