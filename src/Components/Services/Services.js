import React, { Component } from 'react'
import Title from '../Title/Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import './Services.css'
class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: 'Unlimited number of cocktails'
            },
            {
                icon: <FaHiking />,
                title: "Free Hiking",
                info: 'Free Hiking on all our suites'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'You also get free Shuttles'
            },
            {
                icon: <FaBeer />,
                title: "Free Beer",
                info: 'Your Favourite! yes beers are also free'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

export default Services