import React from "react";
import {configure, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import SearchBar from "../components/searchBar/SearchBar";
import BreedCreator from '../components/breedCreator/BreedCreator'

configure({adapter: new Adapter()})

describe('SearchBar',()=>{
    let input;
    beforeEach(()=>{
        input = shallow(<SearchBar/>)
    });
    
    it('El input deberia recibir informacion y ejecutar su funcion', ()=>{
        expect(input.find('input').prop('type')).toEqual('text') 
    })
})