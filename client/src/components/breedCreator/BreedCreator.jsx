import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { createRace } from "../../redux/actions";
import { getTemperaments } from "../../redux/actions";
// import { useLocation } from "react-router-dom";
import "../breedCreator/breeCreator.css";

// genero funcion para validar formulario
function formValidator(input) {
  const error = {};
  if (!input.name || input.name === "") {
    error.name = "Se requiere el nombre de la raza";
  } else {
    error.name = "";
  }
  if (!input.weightmax) {
    error.weightmax =
      "Se requiere un peso maximo para la raza y debe ser un numero";
  } else {
    error.weightmax = "";
  }
  if (!input.weightmin) {
    error.weightmin =
      "Se requiere un peso minimo para la raza y debe ser un numero";
  } else {
    error.weightmin = "";
  }
  if (!input.heightmax) {
    error.heightmax =
      "Se requiere una altura maxima para la raza y debe ser un numero";
  } else {
    error.heightmax = "";
  }
  if (!input.heightmin) {
    error.heightmin =
      "Se requiere una altura minima para la raza y debe ser un numero";
  } else {
    error.heightmin = "";
  }
  if (!input.life_span) {
    error.life_span =
      "Se requiere un estimado de vida la raza y debe ser un numero";
  } else {
    error.life_span = "";
  }
  // if(input.temperament.length ===0){error.temperament = ''}else{error.temperament = ''}
  return error;
}

// componente que se renderiza para la creacion de la raza
function BreedCreator(props) {
  // const navigate = useNavigate();
//   const location = useLocation()
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    heightmax: "",
    heightmin: "",
    weightmax: "",
    weightmin: "",
    life_span: "",
    image: "https://i.imgur.com/2O2A3WP.jpeg",
    temperament: [],
  });
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getTemperaments());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // funcion para manejo del cambio, dentro de este seteo el estado de input y el estado de error con la funcion validadora de forms
  function changeHandler(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      // en setError llamo la funcion 'formValidator' para validar todos los campos del form
      formValidator({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function selectHandler(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (input.name === "" || input.weightmax === "" || input.weightmin === "" || input.heightmax === "" || input.heightmin === "" || input.life_span === "")
      return alert("(o _ o) ups!, parece que tienes un campo obligatorio vacio");
    if (!error.name && !error.weightmax && !error.weightmin && !error.heightmax && !error.heightmin && !error.life_span && !error.temperament) {
      dispatch(createRace(input));
      alert(`Genial!!!!, La raza ${input.name} ha sido creada`);
      document.getElementById("my-form").reset();
      setInput({
        name: "",
        heightmax: "",
        heightmin: "",
        weightmax: "",
        weightmin: "",
        life_span: "",
        image: "https://i.imgur.com/2O2A3WP.jpeg",
        temperament: [],
      });
    } else {
      alert("(o _ o) ups!, parece que tienes un error en un campo");
    }
  }

  function temperamentStateDeleter(a) {
    setInput({
      ...input,
      temperament: input.temperament.filter((t) => t !== a),
    });
  }

  function tempError(temp) {
    let num = 0;
    for (let i = 0; i <= temp; i++) {
      num++;
    }
    if (num > 0) return "Se requiere al menos un temperamento";
  }

  function home(e) {
    // navigate("/home", {replace: true})
    // window.location.reload()
    e.preventDefault()
    window.location.href = '/home'
    
  }

  
  //funcion para generar numeros del 1 al 100
  function num() {
    let listNum = [];
    for (let i = 0; i <= 100; i++) {
      listNum.push(i);
    }
    return listNum;
  }

  const numbers = num();

  return (
    <div className="form-container">
      <div className="dog-image-creator"></div>
      <form className="form-style" id="my-form" onSubmit={submitHandler}>
        
        <h1>Vamos! Crea una Raza</h1>

        <label className="label-text">Nombre Raza</label>
        <input className="input-form" type="text" name="name" onChange={changeHandler}/>
        <p className="error">{error.name}</p>

        <label className="label-text">Altura Maxima</label>
        {/* <input className='input-form' type="text" name = 'heightmax' onChange={changeHandler}/> */}
        <select className="input-form" type="text" name="heightmax" onChange={changeHandler}>
          <option></option>
          {numbers.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        <p className="error">{error.heightmax}</p>

        <label className="label-text">Altura Minima</label>
        {/* <input className='input-form' type="text" name = 'heightmin' onChange={changeHandler}/> */}
        <select className="input-form" type="text" name="heightmin" onChange={changeHandler}>
          <option></option>
          {numbers.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        <p className="error">{error.heightmin}</p>

        <label className="label-text">Peso Maximo</label>
        {/* <input className='input-form' type="text" name = 'weightmax' onChange={changeHandler}/> */}
        <select className="input-form" type="text" name="weightmax" onChange={changeHandler}>
          <option></option>
          {numbers.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        <p className="error">{error.weightmax}</p>

        <label className="label-text">Peso Minimo</label>
        {/* <input className='input-form' type="text" name = 'weightmin' onChange={changeHandler}/> */}
        <select className="input-form" type="text" name="weightmin" onChange={changeHandler}>
          <option></option>
          {numbers.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>

        <p className="error">{error.weightmin}</p>

        <label className="label-text">Años de vida</label>
        {/* <input className='input-form' type="text" name = 'life_span' onChange={changeHandler}/> */}
        <select className="input-form" type="text" name="life_span" onChange={changeHandler}>
          <option></option>
          {numbers.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        <p className="error">{error.life_span}</p>

        <label className="label-text">Agrega el URL de una imagen</label>
        <input className="input-form" type="text" name="image" onChange={changeHandler}/>

        <label className="label-text">Temperamentos</label>
        <p className="error">{tempError(input.temperament)}</p>

        <select className="select-style" name="temperament" onChange={selectHandler}>
          {temperaments?.map((e) => (
            <option className="ramiro" name="temperament" key={e.id}>
              {e.temperament}
            </option>
          ))}
        </select>

        <div className="temp-container-select">
          {input.temperament.map((t) => (
            <span className="temp-unique" key={t} id={t}>
              {t}
              <button className="delete-button" type="button" onClick={(e) => temperamentStateDeleter(t)}>
                X
              </button>
            </span>
          ))}
        </div>
        <div className="form-button">
            <button className="submit-button" type="submit">
                Crear Raza
            </button>
            <button className="submit-button" onClick={home}>
                Volver al Home
            </button>
        </div>
      </form>
    </div>
  );
}

export default BreedCreator;
