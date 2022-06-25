import React from 'react';
import '../about/about.css'

function About(props) {
    return (
        <div className='about-container'>
            <div className='avatar-container'></div>
            {/* <p>{props.name}</p> */}
            <div className='intro-container'>
                <span className='title-about'>Mi nombre es Rami!</span>
                <span>
                    Soy Fullstack Developer, enfocado al logro en equipo de los resultados siendo eficientes en la consecución del mismo
                </span>
            </div>
            <div className='who-container'>
                <span className='title-about'>
                    ¿Quien Soy?
                </span>
                <span>
                    Un apasionado por la tecnologia y el arte, me gusta tocar el piano y poder crear y plasmar cosas en el dia a diaa traves de los talentos que se podido desarrollar
                </span>
            </div>
            <div className='skill-container'>
                <span className='title-about'>
                    Mis conocimientos en desarrollo
                </span>
                <span>
                    Poseo conocimiento teoricos y practicos cursadas en Henry Bootcamp como experiencia como desarrollador
            
                </span>
                <div className='icons-container'>
                    <span className='icon' id="js">
                    </span>
                    <span className='icon' id="react">
                    </span>
                    <span className='icon' id="css">
                    </span>
                    <span className='icon' id="html">
                    </span>
                    <span className='icon' id="node">
                    </span>
                    <span className='icon' id="postgres">
                    </span>
                </div>
            </div>
            <div className='api-container'>
                Disfruten de mi proyecto individual para el bootcamp de Henry!
            </div>
        </div>
    );
}

export default About;