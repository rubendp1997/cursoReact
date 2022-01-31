import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css'
import PrimeraApp from './PrimeraApp';

const divRoot = document.querySelector('#root');


//ReactDOM.render(<PrimeraApp saludo = 'Vaaamos los chavaleees!'/> , divRoot);
ReactDOM.render(<CounterApp value= {1997}/> , divRoot);


