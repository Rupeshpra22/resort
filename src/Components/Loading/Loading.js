import React from 'react'
import loadingGif from '../../images/gif/loading-arrow.gif'
import './Loading.css'
const Loading  = () =>{
    return(
        <div className="loading">
            <h4>Rooms Data Loading...</h4>
            <img src={loadingGif} alt="loading" />
        </div>
    )
}

export default Loading