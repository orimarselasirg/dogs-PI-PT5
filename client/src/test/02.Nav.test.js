import React from "react";
import {NavLink} from 'react-router-dom'
import {configure, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Nav from '../components/nav/Nav'
import Card from '../components/dogCardsComponents/Card'

configure({adapter : new Adapter()});
describe('componente Nav', ()=>{
    let nav;
    beforeEach(()=>{
        nav = shallow(<Nav/>)
    });

    it('deberia tener un NavLink con el texto "About" y qie dirija a la presentacion del developer', ()=>{
        expect(nav.find(NavLink).at(0).prop('to')).toEqual('about');
        expect(nav.find(NavLink).at(0).text('to')).toEqual('About');
    });
})

// describe('componente Card', ()=>{
//     let card;
//     beforeEach(()=>{
//         card = shallow(<Card/>)
//     });

//     it('Debe tener una NavLink que que dirija a los detalles de la raza"', ()=>{
//         expect(card.find(NavLink).prop('to')).toBe('/racedetails/undefined');
        
//     });
//     it('Deberia tener una etiqueta "p" con un nombre de clase llamado "breed-info"', ()=>{
//         expect(card.find('p').prop('className')).toEqual('breed-info');
       
//     });
// })

