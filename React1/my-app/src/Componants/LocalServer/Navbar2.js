import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar2 = () => {
    return (
        <div class="container mt-4">
            <div>
                <nav>
                    <NavLink className="get" to="/">Get_Data</NavLink>
                    <NavLink to="/post">Post_Data</NavLink>
                    <NavLink to="/put">Put_Data</NavLink>
                    <NavLink to="/delete">Delete_Data</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navbar2
