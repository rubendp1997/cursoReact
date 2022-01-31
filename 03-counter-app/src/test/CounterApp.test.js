import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import PrimeraApp from '../CounterApp';
import CounterApp from '../CounterApp';

describe('first', () => {
    let wrapper;

    beforeEach (() => {
        wrapper = shallow( <CounterApp value= {10}/> );
    }

    );
    // test('Debe de mostrar el mensaje hola soy perro', () => {
    //     const saludo = 'Hola soy Goku';

    //     const { getByText } = render(<PrimeraApp saludo = {saludo}/>);

    //     expect ( getByText(saludo) ).toBeInTheDocument();
    // });

    test('Correct snpashot', () => {
      
        const counter = 100;
        const wrapper = shallow( <CounterApp value= {counter}/> );

        expect(wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar el valor de contador', () => {

        const counter = '200';
        const wrapper = shallow( <CounterApp value = {counter}/> );


        const textoParrafo = wrapper.find('h2').text();
        expect(textoParrafo.trim()).toBe(counter);
      
    });

    test('Debe incrementar contador con +1', () => {
      

        wrapper.find('button').at(0).simulate('click');
        const textoContador = wrapper.find('h2').text();
        console.log(textoContador);
        expect(textoContador).toBe('11');

    });

    test('Debe incrementar contador con -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const textoContador = wrapper.find('h2').text();

        expect(textoContador).toBe('9');

    });

    test('Debe resetear contador', () => {
        wrapper = shallow( <CounterApp value= {10}/> );
        wrapper.find('button').at(2).simulate('click');

        wrapper.find('button').at(1).simulate('click');
        const textoContador = wrapper.find('h2').text();

        expect(textoContador).toBe('10');

    });
    
    
    
    
});
