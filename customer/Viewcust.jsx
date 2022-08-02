import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Viewcust() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    });
    const { id } = useParams();
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };
    useEffect(() => {
        loadUser();
    }, []);
    return (
        <div className="container my-4">
            <Link className="btn btn-primary" to="/">
                back to home
            </Link >
            <h1 className="display-4">User Detailes {id}</h1>
            <hr />
            <ul class="list-group">
                <li class="list-group-item">name: {user.name} </li>
                <li class="list-group-item">username: {user.username}</li>
                <li class="list-group-item">email: {user.email}</li>
                <li class="list-group-item">phone: {user.phone}</li>
                <li class="list-group-item">address: {user.address}</li>
                <li class="list-group-item">city: {user.city}</li>
                <li class="list-group-item">state: {user.state}</li>
                <li class="list-group-item">country: {user.country}</li>
                <li class="list-group-item">pincode: {user.pincode}</li>
            </ul>
        </div>
    );
}

export default Viewcust;
