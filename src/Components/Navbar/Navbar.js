import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <Link to="/">BEACH RESORT</Link>
               </div>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/rooms/">Rooms</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar