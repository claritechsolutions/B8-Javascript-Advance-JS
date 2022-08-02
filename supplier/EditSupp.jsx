import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const EditSupp = () => {
    let navigate = useNavigate();
    const { id } = useParams()
    const [user, setuser] = useState({
        name: "",
        company: "",
        gstinnumber: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: ""

    });
    const { name,company, gstinnumber, email, phone, address, city, state, country, pincode} = user;
    const onInputChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        loaduser()
    }, [])
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        navigate('/');
    };

    const loaduser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setuser(result.data)
    }
    return (
        <div className="container mt-3">
            <div className="row ">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1>Edit Details</h1>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                        <label htmlFor="exampleInput" className="form-label">
                                        Your Name
                                    </label>
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
                        <label htmlFor="exampleInput" className="form-label">
                                        Your Company Name
                                    </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Company Name"
                                name="company"
                                value={company}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3"> <label htmlFor="exampleInput" className="form-label">
                                        Your GSTIN Number
                                    </label>
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
                        <label htmlFor="exampleInput" className="form-label">
                                        Email id
                                    </label>
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
                        <label htmlFor="exampleInput" className="form-label">
                                        Phone no.
                                    </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={phone}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInput" className="form-label">
                                        Address 
                                    </label>
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
                        <label htmlFor="exampleInput" className="form-label">
                                        City
                                    </label>
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
                        <label htmlFor="exampleInput" className="form-label">
                                        State
                                    </label>
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
                        <label htmlFor="exampleInput" className="form-label">
                                        Country
                                    </label>
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
                        <label htmlFor="exampleInput" className="form-label">
                                        Pincode
                                    </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your pincode"
                                name="pincode"
                                value={pincode}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" to="/supplier">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditSupp;  