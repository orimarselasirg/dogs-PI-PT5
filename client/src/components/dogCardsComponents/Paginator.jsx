import React, {useState} from "react";
import Card from './Card'
import {az, za} from '../../controllers/alphabeticalOrders'
import {sortWeightMaxAsc, sortWeightMaxDesc, sortHeightMaxAsc, sortHeightMaxDesc} from '../../controllers/numericalOrder'
import {next, prev} from '../../controllers/paginatorFunction'
import '../dogCardsComponents/paginator.css'


function Paginator({array, page}) {
    const [sum, setSum] = useState(0); // estado pagina prev
    const [sum2, setSum2] = useState(page); // estado pagina next
    const [asc, setAsc] = useState(false); // estado para definir orden alfabetico por nombre
    const [weight, setWeight] = useState(false) // estado para definir orden numero por peso
    const [height, setHeight] = useState(false) // estado para definir orden numero por altura
    
    function order(){asc ? az(setAsc, array) : za(setAsc, array);}
    function weightOrder(){weight ? sortWeightMaxAsc(setWeight, array) : sortWeightMaxDesc(setWeight, array)}
    function heightOrder(){height ? sortHeightMaxAsc(setHeight, array) : sortHeightMaxDesc(setHeight, array)}

  return (
    <div>
      {/* <h2 className="title-breed">Listado de razas</h2> */}
      <div className="controls-buttons">
        <div className="pager-buttons">
          <button className="p-button" onClick={()=> prev(sum2, sum, setSum, setSum2, page, array)}>prev</button>
          <button className="p-button" onClick={()=> next(sum2, sum, setSum, setSum2, page, array)}>next</button>
        </div>
        <div className="order-buttons">
          <button className ='o-button' onClick={order}> AZ-ZA</button>
          <button className ='o-button' onClick={weightOrder}>Ordenar por peso</button>
          <button className ='o-button' onClick={heightOrder}>Ordenar por altura</button>
        </div>
      </div>
      <div className="cards-style-container">
        {array.slice(sum, sum2).map((breed) => (
            <Card
              key={breed.id}
              id = {breed.id}
              name={breed.name}
              image={breed.image.url}
              temperament={breed.temperament}
              weight = {breed.weight.metric}
              // image2={breed.image}
              // temperament2={
              //   breed.temperaments?.map(e=>(
              //     e.temperament + ', '))}
            />
          ))}          
      </div>
    </div>
  );
}

export default Paginator;
