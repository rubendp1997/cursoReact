 import { getHeroeById } from "./bases/08-export";

// const promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log('Dos segundos despues...')
//         const heroe = getHeroeById(2);
        
//         //resolve(heroe);
//         reject('No se pudo encontrar heroe.')
        
//     }, 2000);

// });

// promise.then( (heroe) =>
// {
//     console.log(heroe);
//     console.log('Then de la promesa.');
// } ).catch(err => console.warn(err))


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Dos segundos despues...')
            const heroe = getHeroeById(id);
            heroe?resolve(heroe):
                reject('No encontrado');
            
            //resolve(heroe);
            //reject('No se pudo encontrar heroe.')
            
        }, 2000);
    
    });
}

getHeroeByIdAsync(2).then(console.log
).catch(console.warn)