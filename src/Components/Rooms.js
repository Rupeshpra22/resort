import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Hero/Hero'
import Banner from './Banner/Banner'
const Rooms = () => {
    return (
        <div>
            <Hero hero="rooms-hero">
                <Banner 
                title="our rooms">
                    <Link to="/" className="btn-primary">Return to Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Rooms