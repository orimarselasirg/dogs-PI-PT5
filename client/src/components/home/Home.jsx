import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllRaces} from '../../redux/actions';
import Nav from '../nav/Nav'
import SearchBar from '../searchBar/SearchBar';
import Favorites from '../favorites/Favorites';
import DogsCards from '../dogCardsComponents/DogsCards';
import BreedCreator from '../breedCreator/BreedCreator';
import BreedDetails from '../breedDetails/BreedDetails';
import About  from '../about/About';
import "../home/home.css"


function Home(props) {
    const [input, setInput] = useState('')
    // const [fav, setFav] = useState(false)
    const dispatch = useDispatch();
    // const favorites = useSelector(state => state.favorites)
    useEffect(()=> {
        dispatch(getAllRaces());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    
    return (
        <div className='container'>
            <Nav/>
            <SearchBar setInput = {setInput} />
            <Routes>
                <Route path = 'home' element = {<DogsCards input = {input}/>} exact/>
                <Route path = 'about' element = {<About/>} exact/>
                <Route path = 'favorites' element = {<Favorites/>} exact/>
                <Route path = 'racecreator' element = {<BreedCreator/>} exact/>
                <Route path = 'racedetails/:name' element = {<BreedDetails/>} exact/>
            </Routes>    
        </div>
    );
}

export default Home;