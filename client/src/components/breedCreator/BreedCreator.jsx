import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {createRace} from '../../redux/actions'
import {getTemperaments} from '../../redux/actions'
import '../breedCreator/breeCreator.css'

// genero funcion para validar formulario
function formValidator(input){
    const error = {}
    if(!input.name){error.name = 'Se requiere el nombre de la raza'}else{ error.name = ''}
    if(!input.weightmax){error.weightmax = 'Se requiere un peso para la raza'}else {error.weightmax = ''}
    if(!input.weightmin){error.weightmin = 'Se requiere un peso para la raza'}else {error.weightmin = ''}
    if(!input.heightmax){error.heightmax = 'Se requiere una altura para la raza'} else{error.heightmax = ''}
    if(!input.heightmin){error.heightmin = 'Se requiere una altura para la raza'} else{error.heightmin = ''}
    if(!input.life_span){error.life_span = 'Se requiere una altura para la raza'}else{error.life_span = ''}
    if(input.temperament.length === 0){error.temperament = 'Se requiere un temperamento para la raza'}else{error.temperament = ''}
    return error
}

// componente que se renderiza para la creacion de la raza
function BreedCreator(props) {
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: '',
        heightmax: '',
        heightmin: '',
        weightmax: '',
        weightmin: '',
        life_span : '',
        image: "https://i.imgur.com/2O2A3WP.jpeg",
        temperament : []
    })
    const temperaments = useSelector(state => state.temperaments)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTemperaments())
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
    

// funcion para manejo del cambio, dentro de este seteo el estado de input y el estado de error con la funcion validadora de forms
function changeHandler(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    
    })
    setError( // en setError llamo la funcion 'formValidator' para validar todos los campos del form
    formValidator({
        ...input,
            [e.target.name] : e.target.value
        })
    )
}

function selectHandler(e){
    setInput({
        ...input,
        temperament : [...input.temperament, e.target.value]
    })
}

function submitHandler(e){
    e.preventDefault()
    if(!error.name && !error.weight && !error.height && !error.life_span){
        dispatch(createRace(input))
        alert('Genial!!!!, La raza ha sido creada')
    } else {
        alert('Upa! Parece que hubo un problema')
    }
    navigate("/home", {replace: false})
}

function temperamentStateDeleter(a){
    setInput({
        ...input,
        temperament : input.temperament.filter(t => t !== a)
    })
}
    return (
        <div className='form-container'>
            <div className='dog-image-creator'></div>
            <form className="form-style" onSubmit={submitHandler}>
                <h1>Vamos!  Crea una Raza</h1>
                <label className="label-text">Nombre Raza</label>
                <input className='input-form' type="text" name = 'name' onChange={changeHandler} />

                <label className="label-text">Altura Maxima</label>
                <input className='input-form' type="text" name = 'heightmax' onChange={changeHandler}/>

                <label className="label-text">Altura Minima</label>
                <input className='input-form' type="text" name = 'heightmin' onChange={changeHandler}/>

                <label className="label-text">Peso Maximo</label>
                <input className='input-form' type="text" name = 'weightmax' onChange={changeHandler}/>

                <label className="label-text">Peso Minimo</label>
                <input className='input-form' type="text" name = 'weightmin' onChange={changeHandler}/>

                <label className="label-text">Años de vida</label>
                <input className='input-form' type="text" name = 'life_span' onChange={changeHandler}/>

                <label className="label-text">Agrega una imagen</label>
                <input className='input-form' type="text" name = 'image' onChange={changeHandler}/>

                <label className="label-text">Temperamentos</label>
                <select className='select-style' name ='temperament' onChange={selectHandler}>
                    {/* <option> Escoge un temperamento</option> */}
                    {
                        temperaments.map(e=>(
                            <option className='ramiro' name = 'temperament' key = {e.id}>{e.temperament}</option>
                        ))
                    }                    
                </select>
                <div className='temp-container-select'>
                {
                    
                    input.temperament.map(t => (
                        
                        <span className='temp-unique' id ={t}>
                            {t}
                            <button className='delete-button' type='button' onClick={(e) =>temperamentStateDeleter(t)}>X</button>
                        </span>

                        
                        
                    ))
                }

                </div>

                <button className='submit-button' type="submit">Crear Raza</button>
            </form>
            
        </div>
    );
}

export default BreedCreator;