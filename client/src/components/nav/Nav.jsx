import React from "react";
import { NavLink } from "react-router-dom";
import "../nav/nav.css";

// import {useDispatch} from 'react-redux'
// import {getAllRaces2} from '../redux/actions'

function Nav(props) {
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //     dispatch(getAllRaces2())
  // })

  return (
    <div className="nav-container">
      <div className="link-container">
        
          <NavLink className = 'link' to="about">About</NavLink>
        
        
          <NavLink className = 'link' to="home">Home</NavLink>
        
        
          <NavLink className = 'link' to="racecreator">Crear Raza de perros</NavLink>
        
        
          <NavLink className = 'link' to="favorites">Favoritos</NavLink>
        
      </div>
    </div>
  );
}

export default Nav;
