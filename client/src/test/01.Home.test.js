import React from "react";
import {configure, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'
import { MemoryRouter } from "react-router-dom";

import StartHomepage from "../components/startHomePage/StartHomepage";
import Home from '../components/home/Home'

configure({adapter: new Adapter()})

describe ('Home', ()=>{
    let store;
    const middlewares = [];
    const mockStore = configureStore(middlewares)

    beforeEach(()=>{
        store = mockStore([])
    });

    describe('cargue del landing', ()=>{
        it('Debe cargar el landing page en la ruta "/"', ()=>{
            const wrapper = shallow(
                <Provider store ={store}>
                    <MemoryRouter initialEntries={['/']}>
                        <StartHomepage/>
                    </MemoryRouter>
                </Provider>
            )
            expect(wrapper.find(StartHomepage)).toHaveLength(1);
        });
        it('se debe renderizar el Home en la ruta "/home"', ()=>{
            const wrapper = shallow(
                <Provider store ={store}>
                    <MemoryRouter initialEntries={['/']}>
                        <Home/>
                    </MemoryRouter>
                </Provider>
            )
            expect(wrapper.find(Home)).toHaveLength(1);
        });

    });
});

