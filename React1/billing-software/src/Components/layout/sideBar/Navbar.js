import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css'
const Navbar = () => {
    const [sidebar, setsidebar] = useState([]);
    const showSidebar = () => setsidebar(!sidebar);

    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                <NavLink to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavLink>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <NavLink to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </NavLink>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <NavLink to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;