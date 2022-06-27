import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import '../dogCardsComponents/card.css'
import {spinnerchanger} from '../../controllers/spinControl'


function Card(props) {
const dispatch = useDispatch()
const favorites = useSelector(state => state.favorites)
const [spinner, setSpinner] = useState(false)


spinnerchanger(setSpinner)

const favValid =favorites.find(e=>{
  if(e.id === props.id){ return true} else { return false} 
})

function breedFavorite (e){
  e.preventDefault()
  if(!favValid) {dispatch(addFavorite({id: props.id, image : props.image, name : props.name}))
    alert(`Has agregado la raza ${props.name} a tu lista de razas favoritas`)
  }else {
    alert (`Se removio la raza ${props.name} de tus favoritos`)
    dispatch(removeFavorite(props.id))
  }
}
  
  return (
    
    
      
    <div className="card">
      <NavLink  className = 'breed-info' to={`/racedetails/${props.name}`}>
      <p className = 'breed-info'>{props.name}</p>
      <span onClick={breedFavorite} className={favValid ? 'star' : 'noStar'}></span>
      </NavLink>
      <div className='spinner-cont'>
        { !props.image || !spinner ? <div className="spinner"/> :
          <img className="dogImage" src={props.image} alt="" />
        }
      </div>
      <div className="texts-container">
        <div className="texts-temp">
          <span className="span-temp">Temperamentos: </span>
          <span className = 'breed-temp'>{props.temperament}</span>  
        </div>
      <div className="texts-info">
        <span className="span-weight">Peso: </span>
        <span className = 'breed-weigth'>{props.weight} Kg</span>
      </div>
      </div> 
    </div>
  );
}

export default Card;
