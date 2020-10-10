import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    BEACH RESORT
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