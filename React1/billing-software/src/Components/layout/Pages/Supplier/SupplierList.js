import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SupplierList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadUserData()
      }, [])
       const loadUserData = () => {
        axios.get('http://localhost:3001/supplier')
      .then((response) => setData(response.data))
      .catch((error) => console.error("error", error))
  }
  const userDelete = async (data) => {
    let response = await axios.delete(` http://localhost:3001/supplier/${data.id}`);
    if (response) {
      loadUserData();
    }
  }
  const userEdit = (data) => {
    navigate(`/updatesupplier/${data.id}`);
  }


    return (


        <div className="supplier bg-img">
             {/* <h3 className="mt-4 text-primary">**Supplier List**</h3> */}
      {console.log("data", data)}
      <table className="container table table-bordered mt-5 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Company</th>
            <th scope="col">GSTINNUMBER</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Country</th>
            {/* <th scope="col">Hobbies</th> */}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table">
            
          {
            data.map((supplier, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{supplier.name}</td>
                  <td>{supplier.company}</td>
                  <td>{supplier.gstinnumber}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.phone}</td>
                  <td>{supplier.address}</td>
                  <td>{supplier.city}</td>
                  <td>{supplier.state}</td>
                  <td>{supplier.country}</td>
                  {/* <td>{user.hobbies.toString()}</td> */}
                  <td >
                  <div class = "btn-group">
                    {/* <button type="button" className="btn btn-primary me-2">Edit</button> */}
                    <button type="button" className="btn btn-primary me-2" onClick={() => userEdit(supplier)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => userDelete(supplier)}>Delete</button>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        </table>
        </div>
    )
}

export default SupplierList


