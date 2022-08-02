import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Warehouse = () => {
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
      <div className="container ">
        <div className="p-4">
          <h1>Warehouse</h1>
          <NavLink
            className="btn btn-outline-dark mb-2 w-24"
            to="/warehouse/add"
          >
            Add Warehouse
          </NavLink>
          <table className="table table-bordered text-center">
            <thead className="table-dark ">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Warehouse Name</th>
                <th scope="col">Description</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {user.map((item, index) => (
                <tr>
                  <th scope="col">{index + 1}</th>
                  <th scope="col">{item.warehousename}</th>
                  <th scope="col">{item.description}</th>
                  <th scope="col">{item.address}</th>
                  <th scope="col">
                    <NavLink
                      className="btn btn-outline-primary me-2"
                      to={`/warehouse/${item.id}`}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </NavLink>
                    <NavLink
                      className="btn btn-outline-success me-2"
                      to={`/warehouse/edit/${item.id}`}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </NavLink>
                    <NavLink
                      className="btn btn-outline-danger me-2"
                      to={"/"}
                      onClick={() => deleteuser(item.id)}
                    >
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

export default Warehouse;
