import React from 'react'
import Banner from '../Banner/Banner'
import Hero from '../Hero/Hero'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
    return (
        <div>
            <Hero>
                <Banner
                    title="luxurious rooms"
                    subtitle="Deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                 </Link>
                </Banner>

            </Hero>
        </div>
    )
}

export default Home