

const nombre = "Ruben"
const apellido = "Dominguez"

const nombreCompleto = nombre + ' ' +apellido;

const nombreCompleto2 = `${nombre}
${apellido}`;

console.log(nombreCompleto2);

function getSaludo(nombre){
    return 'Hola perro '+ nombre;
}

console.log(`Esto es un saludo: ${getSaludo(nombreCompleto2)}`);