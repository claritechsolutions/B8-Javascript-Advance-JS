import React from 'react';
import { NavLink } from 'react-router-dom'

const NavbarLocal = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/GetData">GetData</NavLink>
        <NavLink to="/PostData">PostData</NavLink>
        {/* <NavLink to="/PutData">PutData</NavLink> */}
        <NavLink to="/UpdateData">PutData</NavLink>
        <NavLink to="/Delete">Delete</NavLink>
    
        {/* <NavLink to="/DeleteData">DeleteData</NavLink> */}
    </nav>
  )
}

export default NavbarLocal