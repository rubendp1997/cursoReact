
const active = true;
let message = '';

if(active){
    message = 'Activo';
    console.log(message);
}

message = active ? 'Activo': 'Inactivo';
console.log(message);

message = active && 'Activo';
console.log(message);

//Las tres opciones son validas, pero en caso de solo necesitar la condicion de cuando sea true
//lo mejor es la ultima opcion.
