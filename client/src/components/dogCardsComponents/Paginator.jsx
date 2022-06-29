import React, {useState} from "react";
import Card from './Card'
import {az, za} from '../../controllers/alphabeticalOrders'
import {sortWeightMaxAsc, sortWeightMaxDesc, sortWeightMinAsc, sortWeightMinDesc, sortHeightMaxAsc, sortHeightMaxDesc, sortHeightMinAsc, sortHeightMinDesc} from '../../controllers/numericalOrder'
import {next, prev} from '../../controllers/paginatorFunction'
import '../dogCardsComponents/paginator.css'



function Paginator({array, page, breeds}) {  
    const [sum, setSum] = useState(0); // estado pagina prev
    const [sum2, setSum2] = useState(page); // estado pagina next
    const [asc, setAsc] = useState(false); // estado para definir orden alfabetico por nombre
    const [weight, setWeight] = useState(false) // estado para definir orden numero por peso
    const [height, setHeight] = useState(false) // estado para definir orden numero por altura
    const [state, setState] = useState({value:''})
    
    let list = Math.ceil(breeds.length/page)
    // let pages = pager(breeds, page)
    
function order(){asc ? az(setAsc, array) : za(setAsc, array);}
  
function selectchanger(e){
setState({value: e.target.value})
if(state.value ==='weight-max-asc' || 'weight-max-desc'){
  weight ?  sortWeightMaxAsc(setWeight, array) : sortWeightMaxDesc(setWeight, array)
  }
if(state.value ==='weight-min-asc' || 'weight-min-desc'){
  weight ?  sortWeightMinAsc(setWeight, array) : sortWeightMinDesc(setWeight, array)
  }
if(state.value ==='height-max-asc' || 'height-max-desc'){
  height ?  sortHeightMaxAsc(setHeight, array) : sortHeightMaxDesc(setHeight, array)
  }
if(state.value ==='height-min-asc' || 'height-min-desc'){
  height ?  sortHeightMinAsc(setHeight, array) : sortHeightMinDesc(setHeight, array)
  }
}

  return (
    <div>
      {/* <h2 className="title-breed">Listado de razas</h2> */}
      <div className="controls-buttons">
        <div className="pager-buttons">
          <button className="p-button" onClick={()=> prev(sum2, sum, setSum, setSum2, page, array)}>prev</button>
          <div className="paginas">
            {/* {
              pages.map(p=> (
                  <span className="page">{p}</span>
              ))
            } */}
            <span>{sum/page + 1}</span>
            <span> de </span>
            <span>{list}</span>
          </div>
            {/* <span>{pager(breeds, page)}</span> */}
          <button className="p-button" onClick={()=> next(sum2, sum, setSum, setSum2, page, array)}>next</button>
        </div>
        <div className="order-buttons">
          <select className = 'select-opt' id = 'order-select' name="select-order" onChange={order}>
            <option value="">A-Z order</option>
            <option value="">z-a</option>
            <option value="">a-z</option>
          </select>
          <select className = 'select-opt' name="select-weight" onChange={selectchanger}>
            <option value="">Weight order</option>
            <option value = 'weight-max-asc'>Weight Max Asc</option>
            <option value = 'weight-max-desc'>Weight Max Desc</option>
            <option value = 'weight-min-asc'>Weight Min Asc</option>
            <option value = 'weight-min-desc'>Weight Min Desc</option>
          </select>
          <select className = 'select-opt' name="select-height" onChange={selectchanger}>
            <option value="">Height order</option>
            <option value = 'height-max-asc'>Height Max Asc</option>
            <option value = 'height-max-desc'>Height Max Desc</option>
            <option value = 'height-min-asc'>Height Min Asc</option>
            <option value = 'height-min-desc'>Height Min Desc</option>
          </select>
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
              // fav ={fav}
              // setFav ={setFav}
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
