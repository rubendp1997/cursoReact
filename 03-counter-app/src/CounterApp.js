import React, {useState} from 'react';
import PropTypes from 'prop-types'
//rafcp sinppet

const CounterApp = ({value}) => {

    const [counter, setCounter]= useState(value);


    const handleAdd = (e)=>{
       // setCounter(counter+1);
       setCounter((c)=>c+1)
    }

    const handleReset = (e)=>{
        // setCounter(value);
        setCounter(value)
     }

     const handleSubstract = (e)=>{
        // setCounter(counter-1);
        setCounter((c)=>c-1)
     } 


return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        
        <button onClick={handleAdd}>+1</button>
        <button className= "buttonReset" onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>-1</button>

        
    </>
);

}


CounterApp.prototypes= {
    value: PropTypes.number
}

export default CounterApp;