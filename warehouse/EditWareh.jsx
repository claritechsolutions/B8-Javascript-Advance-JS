import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const EditWareh = () => {
    let navigate = useNavigate();
    const { id } = useParams()
    const [user, setuser] = useState({
        warehousename: "",
        description: "",
        address: ""

    });
    const { warehousename, description, address} = user;
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
                    Warehouse Name
                                    </label>
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
                        <label htmlFor="exampleInput" className="form-label">
                        Description
                                    </label>
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
                    
                        <button type="submit" className="btn btn-primary" to="/warehouse">
                            Submit
                        </button>
                    </form>
                </div>
               
            </div> 
        </div>
    );
};

export default EditWareh;