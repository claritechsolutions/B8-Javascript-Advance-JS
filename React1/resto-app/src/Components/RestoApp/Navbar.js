import React from 'react'
import { NavLink } from 'react-router-dom';
import burger2 from '../img/burger2.jpg'


const Navbar= () => {
    return (
        <div className="container mt-4">
            <div>
                <nav>
                    <NavLink className="home" to="/">Home</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/offer">Offer</NavLink>
                    <NavLink to="/aboutus"> About-Us</NavLink>
                    <img src={burger2} alt="" width={40}  />
                </nav>
            </div>
        </div>
    )
}

export default Navbar