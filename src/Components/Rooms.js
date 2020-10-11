import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Hero/Hero'
import Banner from './Banner/Banner'
import RoomsContainer from './RoomsContainer/RoomsContainer'
const Rooms = () => {
    return (
        <>
            <Hero hero="rooms-hero">
                <Banner 
                title="our rooms">
                    <Link to="/" className="btn-primary">Return to Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    )
}

export default Rooms