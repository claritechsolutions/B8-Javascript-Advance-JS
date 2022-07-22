import React, { useState, useEffect } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { BsCartPlus } from 'react-icons/bs'
import axios from 'axios'
// import Shop from '../shop/Shop'
import Search from '../Search/Search'
import {useSelector} from 'react-redux'

const Header = () => {
    const [headerData, setHeaderData] = useState([])
    const [CartData, setCartData] = useState([]);
    const [Data, setData] = useState([]);

    const newCartValue= useSelector(state=>state.numOfCartProduct)
    console.log("newCartValue",newCartValue)
    useEffect(() => {
        getHeader();
        getCartData();
        getAllData();
    }, [])

    const getHeader = () => {
        axios.get(`http://localhost:3001/Header`)
            .then((response) => {
                // console.log("header", response)
                setHeaderData(response.data)
            })
            .catch(error => (console.error(error)))
    }
    const getCartData = () => {
        axios.get(`http://localhost:3001/cart`)
            .then((response) => {
                setCartData(response.data);
            })
            .catch((error) => console.log(error));
    }
    const getAllData = () => {
        axios.get(`http://localhost:3001/products`)
            .then((res) => {
                // console.log(res);
                setData(res.data);
                // setSearchFilterData(res.data)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top position-sticky">
                <div className="container-fluid">
                    <div className="row w-100">
                        <div className=" col-sm-12 col-lg-7">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {
                                        headerData.map((head, index) => {
                                            if (index <= 3) {
                                                return (
                                                    <li className="nav-item">

                                                        <NavLink className="nav-link" to={head.path}>{head.title}</NavLink>
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            {head.title}
                                                        </a>
                                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            {
                                                                head.Menu.map((submenu) => {
                                                                    return (
                                                                        <li> <NavLink className="nav-link text-dark" to={submenu.path}>{submenu.name}</NavLink></li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                                <div className="d-flex" role="search">
                                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={e=> setSearchText(e.target.value)} />
                                    <button className="btn btn-outline-success" type='submit' onClick={HandleSearch}>Search</button> */}
                                    <Search data={Data}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-5">
                            <form className="d-flex justify-content-end">
                                <NavLink to="/SignIn" className="btn text-white me-2">Sign In</NavLink>
                                <NavLink to="/Signup" className="btn text-white me-2">Sign up</NavLink>
                                <NavLink to="/Dashboard" className="btn text-white me-2">Dashboard</NavLink>
                                <button type="link" className="position-relative bg-transparent text-white shadow-none border-0">
                                    <span className='fs-4'><BsCartPlus /></span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger custom_badge">
                                        {/* {CartData.length} */}
                                        {newCartValue}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>

                                </button>
                                {/* <button>newCart:{newCartValue}</button> */}
                                <NavLink to="/AddToCart" className="btn text-white me-2">Cart</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header
