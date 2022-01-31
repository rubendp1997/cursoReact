import React, { useState } from 'react';
import { render } from 'react-dom';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

//rafcp sinppet

export const GifExpertApp = () => {

 const categoriesIni = ['Futbol'];
 const [categories, setCategories] = useState(categoriesIni);

return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>        
        <ol>
            {
                categories.map( category => {
                   return <GifGrid key={category} category={category}/>
                })
            }
        </ol>
    </>
    
);

}