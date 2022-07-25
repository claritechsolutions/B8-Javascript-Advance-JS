import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div>
      <nav lassName="mt-2 ">
        <div className="py-2 ">
          <NavLink className="mr-2" to="/">User List</NavLink>
          <NavLink className="mx-2" to="/CreateUser">Create User</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavMenu ;