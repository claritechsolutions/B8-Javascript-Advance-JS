import React from 'react'
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    // </nav>
    <nav>
      <NavLink className="get" to="/">Get</NavLink>
      <NavLink to="/post">Post</NavLink>
      <NavLink to="/put">Put</NavLink>
      <NavLink to="/delete">Delete</NavLink>
    </nav>
  )
}

export default Navbar