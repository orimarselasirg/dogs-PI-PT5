import React, {useState,  useEffect} from "react";
import { useSelector} from "react-redux";
import Paginator from './Paginator'
import '../dogCardsComponents/dogsCards.css'

function DogsCards({input}) {
  const breeds = useSelector((state) => state.races)// estado global de razas
  const [dogs, setDogs] = useState([]) // estado local de razas
  

  useEffect(()=>{
    raceFiltered(input)
  } // eslint-disable-next-line react-hooks/exhaustive-deps 
  ,[input])
  
  function raceFiltered(breed){

  let dynamicFilter = breeds.filter(e=> {
    if(e.name?.toLowerCase().includes(breed.toLowerCase()) || e.temperament?.toLowerCase().includes(breed.toLowerCase()))
        {return e;} return null
      } )
    setDogs(dynamicFilter)
  }
    
  function showState(){
    if(input.length === 0) return breeds; return dogs
  }
  
  return (
    <div className = 'cards-containers'>
      <Paginator array = {showState()} page = {8} breeds = {breeds}/>
    </div>
  );
}
export default DogsCards;
