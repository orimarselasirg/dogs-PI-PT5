import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRaces} from '../../redux/actions';
import Nav from '../nav/Nav'
import SearchBar from '../searchBar/SearchBar';
import Favorites from '../favorites/Favorites';
import DogsCards from '../dogCardsComponents/DogsCards';
import BreedCreator from '../breedCreator/BreedCreator';
import BreedDetails from '../breedDetails/BreedDetails';
import About  from '../about/About';
import "../home/home.css"
import {spinnerchanger} from '../../controllers/spinControl'



function Home(props) {
    const [input, setInput] = useState('')
    const [spinner, setSpinner] = useState(false)
    const data = useSelector(state => state)
    // const [fav, setFav] = useState(false)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAllRaces());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    spinnerchanger(setSpinner)

    
    return (
        <div className='container'>
            <Nav/>
            <SearchBar setInput = {setInput} />
            <Routes>
                <Route path = 'home' element = { data.races.length <= 0 || !spinner ? <span className='spinner-home'/> :<DogsCards input = {input}/>} exact/>
                <Route path = 'about' element = {<About/>} exact/>
                <Route path = 'favorites' element = {!spinner? <span className='spinner-home'/> :<Favorites/>} exact/>
                <Route path = 'racecreator' element = {<BreedCreator/>} exact/>
                <Route path = 'racedetails/:name' element = {<BreedDetails/>} exact/>
            </Routes>    
        </div>
    );
}

export default Home;