import React from 'react';
import '../components/spinner.css'

function spinner(props) {
    return (
        <div className = "spinner-comp">
            {/* <span className='spinner-dog'/> */}
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    

    
    );
}

export default spinner;