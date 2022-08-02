import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Addcust = () => {
    let navigate = useNavigate();
    const [user, setuser] = useState({
        name: "",
        company:"",
        gstinnumber:"",
        email: "",
        phone: "",
        warehousename: "",
        description: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
    });
    const { name, company, gstinnumber, email, phone, warehousename, description, address, city, state, country, pincode } = user;
    const onInputChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    };
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        navigate('/');
    };
    return (
        <div className="container mt-3">
            <div className="row ">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1 className="my-3">Add Customer Details</h1>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Company Name"
                                name="company"
                                value={company}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter your GSTIN Number"
                                name="gstinnumber"
                                value={gstinnumber}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your Email address"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={phone}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Warehouse name"
                                name="warehousename"
                                value={warehousename}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Description"
                                name="description"
                                value={description}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your address"
                                name="address"
                                value={address}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your city"
                                name="city"
                                value={city}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your state"
                                name="state"
                                value={state}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your country"
                                name="country"
                                value={country}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your pincode"
                                name="pincode"
                                value={pincode}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
};

export default Addcust;
