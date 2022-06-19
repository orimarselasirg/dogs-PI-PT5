import React from 'react';
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import '../breedDetails/breedDetails.css'



function BreedDetails(props) {
    const breeds = useSelector(state => state.races) // traigo el estado global
    const {name} = useParams() // modo corto de usar 'useMatch' y asignarlo a una variable
    const dog = breeds.filter(e => e.name === name) // filtro la raza que coincida con el params
 

    return (
        <div className='breed-details'>
           <div className='detail-image'></div>
           <span className='breed-name'>{dog[0]?.name}</span>
            <div className='image-detail'>
                <img className='dog-image' src={dog[0]?.image?.url} alt={dog[0]?.name} />
            </div>
            <div className='info-cont'>
                <div className='temp-cont-detail'>
                    <span className='span-title'>Temperamentos:</span>
                    <span>{dog[0]?.temperament}</span>
                </div>
            {/* <p>Temperamentos: {dog[0]?.temperament || dog[0]?.temperaments.map(e=>e.temperament + ', ') }</p> */}
                <div className='info-details-cont'>
                <div className='life_span_info'>
                    <span className='span-title'>Años de vida: </span>
                    <span className='span_info'>{dog[0]?.life_span}</span>
                </div>
                <div className='height_info'>
                    <span className='span-title'>Altura: </span>
                    <span className='span_info'>{dog[0]?.height.metric} Centimetros</span>
                </div>
                <div className='weight_info'>
                    <span className='span-title'>Peso: </span>
                    <span className='span_info'>{dog[0]?.weight.metric} Kilos</span>
                </div>
                </div>
                
            </div>    
        </div>
    );
}

export default BreedDetails;