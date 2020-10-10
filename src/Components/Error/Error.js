import React from 'react'
import Hero from '../Hero/Hero'
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <Hero>
            <Banner
                title="404"
                subtitle="Not Found :(">
                <Link to="/" className="btn-primary">Go to Home</Link>
            </Banner>
        </Hero>
    )
}

export default Error