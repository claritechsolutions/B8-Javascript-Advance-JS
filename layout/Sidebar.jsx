import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <div
            className="col-md-3 col-lg-2 sidebar-offcanvas pl-0  bg-secondary text-white"
            id="sidebar"
            role="navigation"
            style={{ backgroundColor: "/e9ecef" }}
        >
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3">
                    <NavLink className="nav-link text-white" to="/">
                        <i className="fa-solid fa-circle-user"></i><h5>Jhon Wick</h5>

                    </NavLink>
                </li>
                <li className="nav-item mb-2 ">
                    <NavLink className="nav-link text-white" to="/dashboard">
                        <i className="fa-solid fa-grid-horizontal"></i>
                        <span classNameName="ml-3">Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-2 ">
                    <NavLink className="nav-link text-white" to="/customer">
                        <i className="fa-solid fa-user"></i> Customer
                    </NavLink>
                </li>
                <li className="nav-item mb-2 ">
                    <NavLink className="nav-link text-white" to="/warehouse">

                        <i className="fa-solid fa-warehouse"></i> Warehouse
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className="nav-link text-white" to="/supplier">
                        <i className="fa-solid fa-boxes-packing"></i>
                        <span classNameName="ml-3"> Supplier</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className="nav-link text-white" to="/product/category">
                        <i className="fas fa-file-export font-weight-bold"></i>
                        <span className="ml-3"> Product Category</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className="nav-link text-white" to="/product">
                        <i class="fa-brands fa-product-hunt"></i>
                        <span className="ml-3"> Product</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className="nav-link text-white" to="/invoices">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                        <span className="ml-3"> Invoices</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className="nav-link text-white" to="/prchase/order">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span className="ml-3"> 
                        Purchase Order</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className="nav-link text-white" to="/roles">
                        Roles
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink className="nav-link text-white" to="/promo/codes">
                        <i class="fa-solid fa-receipt"></i>
                        Promo Codes
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
