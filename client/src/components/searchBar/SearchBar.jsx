import React from 'react';
import "./searchbar.css"

function SearchBar({setInput}) {   
    function handleChange(e){
        setInput(e.target.value)
    } 
    return (
        <div className='searchbar'>
                {/* <label>Raza ó Temperamento</label> */}
                <input className='input-search' type="text" name ='name' onChange={handleChange} placeholder="Busca por Raza o Temperamento"/>
        </div>
    );
}

export default SearchBar;