import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';

describe('first', () => {
  

    // test('Debe de mostrar el mensaje hola soy perro', () => {
    //     const saludo = 'Hola soy Goku';

    //     const { getByText } = render(<PrimeraApp saludo = {saludo}/>);

    //     expect ( getByText(saludo) ).toBeInTheDocument();
    // });

    test('should first', () => {
      
        const saludo = 'Perro';
        const wrapper = shallow( <PrimeraApp saludo = {saludo}/> );

        expect(wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el subtitulo', () => {

        const saludo = 'Perro';
        const wrapper = shallow( <PrimeraApp saludo = {saludo} subtitulo={'Me han follado el culo'}/> );


        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe('Me han follado el culo');
      
    });
    
    
    
});
