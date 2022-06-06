import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
       <nav class="navbar navbar-expand-lg text-bg-warning">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
    <div class="navbar-nav fs-4 text-decoration-none gap-5">
          <Link className="text-decoration-none" to="/">GET</Link>
          <Link className="text-decoration-none" to="/post">POST</Link>
          <Link className="text-decoration-none" to="/put">PUT</Link>
          <Link className="text-decoration-none" to="delete">DELETE</Link>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
