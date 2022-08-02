import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Customer = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };

  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <>
    
      <div className="container customer">
        <div className="p-4">
          <h1>Customers</h1>
          <NavLink className="btn btn-outline-dark mb-2 w-24" to="/user/add">Add Customer</NavLink>
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Phone</th>
                <th scope="col">emailId</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Country</th>
                <th scope="col">Postal Codes</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => (
                <tr>
                  <th scope="col">{index + 1}</th>
                  <th scope="col">{item.name}</th>
                  <th scope="col">{item.phone}</th>
                  <th scope="col">{item.email}</th>
                  <th scope="col">{item.address}</th>
                  <th scope="col">{item.city}</th>
                  <th scope="col">{item.state}</th>
                  <th scope="col">{item.country}</th>
                  <th scope="col">{item.pincode}</th>
                  
                  <th scope="col">
                    <NavLink
                      className="btn btn-outline-primary me-2"
                      to={`/user/${item.id}`}>
                    
                      <i className="fa-solid fa-eye"></i>
                    </NavLink>
                    <NavLink
                      className="btn btn-outline-success me-2"
                      to={`/user/edit/${item.id}`}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </NavLink>
                    <NavLink
                      className="btn btn-outline-danger me-2"
                      to={"/"}
                      onClick={() => deleteuser(item.id)}>
                    
                      <i className="fa-solid fa-trash"></i>
                    </NavLink>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Customer;
