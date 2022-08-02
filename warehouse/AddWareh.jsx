import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddWareh = () => {
    let navigate = useNavigate();
    const [user, setuser] = useState({
        warehousename: "",
        description: "",
        address: ""
       
    });
    const { warehousename, description, address } = user;
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
                    <h1 className="my-3">Add Warehouse Details</h1>
                    <form onSubmit={(e) => onSubmit(e)}>
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
                    
                        <button type="submit" className="btn btn-primary" to="/warehouse">
                            Submit
                        </button>
                    </form>
                </div>
                {/* <div className="col-4"></div> */}
            </div> 
        </div>
    );
};

export default AddWareh;
