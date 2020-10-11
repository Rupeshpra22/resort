import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../../images/room-1.jpeg'
import './Room.css'
const Room = ({room}) =>{
    const {name,slug,images,price} = room;
    return(
        <article className="room">
            <div className="img-container">
            <img src={images[0] || defaultImg} alt="single-room"/>
            <div className="price-top">
                <div>${price}</div>
                <div>per night</div>
            </div>
            <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                Features
            </Link>
            <div className="room-info">
                {name}
            </div>
            </div>
        </article>
    )
}

export default Room