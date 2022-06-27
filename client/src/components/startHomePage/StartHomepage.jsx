import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./StartHomepage.css";
import "./button.css"
import {spinnerchanger} from '../../controllers/spinControl'
// import '../dogCardsComponents/card.css'

function StartHomepage(props) {
const [spinner, setSpinner] = useState(false)
spinnerchanger(setSpinner)


  return (
    
    <div className="container1">
    {
      !spinner ? <div className="bg-spinner"><span className="spinner-shp"/></div> :
      <div className="bg-image">
        <div className="container-shp">
          <span className="title-shp">API Dogs</span>
          <NavLink to="home" className="enter-button">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Entra</span>
            </button>
          </NavLink>
        </div>
      </div>

    }
    </div>
  );
}

export default StartHomepage;
