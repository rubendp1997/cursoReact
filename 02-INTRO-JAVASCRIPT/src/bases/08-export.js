
//import {heroes} from './data/heroes';

import heroes , {owners} from "../data/heroes";

//import { heroes } from "./data/heroes"
//console.log(heroes);


export const getHeroeById = (id)=>{
    return (heroes.find(x => x.id===id));
}

//console.log(getHeroeById(2));

const getHeroeByOwner = (owner)=> (heroes.filter(x => x.owner===owner));

//console.log(getHeroeByOwner('DC'));
//console.log(owners);
