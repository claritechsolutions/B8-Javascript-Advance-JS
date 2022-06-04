import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    // </nav>
    <nav>
      <NavLink to="/">Home</NavLink>
     
      <NavLink to="/LocalJson">View Data</NavLink>
    </nav>
  )
}

export default Navbar