import React from "react";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg text-bg-warning">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex row" id="navbarNavAltMarkup">
        <div className="col-3 ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaxCG060OJF_oppqBA9RqCWDMdw2YtqdMGQ&usqp=CAU" width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo" />
          </div>
        <div class="col-9 navbar-nav fs-4 text-decoration-none gap-5">
          <Link className="text-decoration-none" to="/">HOME</Link>
          <Link className="text-decoration-none" to="/menu">MENU</Link>
          <Link className="text-decoration-none" to="/offer">OFFER</Link>
          <Link className="text-decoration-none" to="/about">ABOUT US</Link>
          <Link className="text-decoration-none" to="/contact">CONTACT US</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
