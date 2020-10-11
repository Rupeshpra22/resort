import React from 'react'
import Banner from '../Banner/Banner'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import { Link } from 'react-router-dom'
import './Home.css'
import FeaturedRooms from '../FeaturedRooms/FeaturedRooms'
const Home = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="luxurious rooms"
                    subtitle="Deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                 </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
        </>
    )
}

export default Home