import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CustomerList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadUserData()
      }, [])
       const loadUserData = () => {
    axios.get('http://localhost:3001/customer')
      .then((response) => setData(response.data))
      .catch((error) => console.error("error", error))
  }
  const userDelete = async (data) => {
    let response = await axios.delete(`http://localhost:3001/customer/${data.id}`);
    if (response) {
      loadUserData();
    }
  }
  const userEdit = (data) => {
    navigate(`/updateuser/${data.id}`);
  }


    return (


        <div className="customer bg-img">
             {/* <h3 className="mt-4 text-primary">**Users List**</h3> */}
      {console.log("data", data)}
      <table className="container table table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
            {/* <th scope="col">Hobbies</th> */}
            <th scope="col">Actions</th>
            
          </tr>
        </thead>
        <tbody>
            
          {
            data.map((customer, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>
                  <td>{customer.city}</td>
                  <td>{customer.state}</td>
                  <td>{customer.zip}</td>
                  {/* <td>{user.hobbies.toString()}</td> */}
                  <td >
                  <div class = "btn-group">
                    {/* <button type="button" className="btn btn-primary me-2">Edit</button> */}
                    <button type="button" className="btn btn-primary me-2" onClick={() => userEdit(customer)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => userDelete(customer)}>Delete</button>
                    </div>
                  </td>
                  
                </tr>
              )
            })
          }
        </tbody>
        </table>
        {/* <div class = "btn-group">
         <button type = "button" class = "btn btn-default"></button>
         <button type = "button" class = "btn btn-default"></button>
         
         </div> */}
        </div>
    )
}

export default CustomerList
