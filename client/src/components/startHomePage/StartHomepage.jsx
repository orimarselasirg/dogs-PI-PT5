import React from "react";
import { NavLink } from "react-router-dom";
import "./StartHomepage.css";
import "./button.css"

function StartHomepage(props) {
  return (
    <div className="bg-image">
      <div className="container-shp">
        <h1 className="title-shp">API Dogs</h1>
        <NavLink to="home" className="enter-button">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Entra</span>
          </button>
          {/* <button className="button-shp">Entra</button> */}
        </NavLink>
      </div>
    </div>
  );
}

export default StartHomepage;
