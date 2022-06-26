import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../redux/actions';
import '../favorites/favorites.css'



function Favorites(props) {
const favorites = useSelector(state => state.favorites)
const dispatch = useDispatch()

function breedFavorite (e, id, name){
    e.preventDefault()
    dispatch(removeFavorite(id))
    alert(`la Raza ${name} ha sido removida de tus favoritos`)
  }
    return ( 
    <div className='favorites-cards-containers'>
    {
        favorites.length === 0 ? 
        <div>
            <p className = 'no-favorites'>Aun no tienes una raza en tus favoritos</p> 
            <span className='sad-dog'></span>
        </div>
        : favorites.map(b => (
            <div className='cont-fav' key = {b.id}>
            <div className="favorite-card" key = {b.id}>
            <NavLink  className = 'breed-info-fav' to={`/racedetails/${b.name}`}>
            <p>{b?.name}</p>
            {/* <span onClick={start} className={fav ? 'star' : 'noStar'}></span> */}
            </NavLink>
            <img className="dogImageFav" src={b.image} alt="" />
            <button className='b-fav' onClick={(e)=>breedFavorite(e, b.id, b.name)}>remover de favoritos</button>
            </div>
      </div>
        ))
    }
    </div>
    );
}

export default Favorites;