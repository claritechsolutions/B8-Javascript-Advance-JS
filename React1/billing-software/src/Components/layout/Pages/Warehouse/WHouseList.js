import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WHouseList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        loadUserData()
    }, [])
    const loadUserData = () => {
        axios.get('http://localhost:3001/warehouse')
            .then((response) => setData(response.data))
            .catch((error) => console.error("error", error))
    }
    const userDelete = async (data) => {
      let response = await axios.delete(` http://localhost:3001/warehouse/${data.id}`);
      if (response) {
        loadUserData();
      }
    }
    const userEdit = (data) => {
      navigate(`/updatewarehouse/${data.id}`);
    }
  
    return (
        <div className='bg-img'>
            <table className=" container table table-bordered mt-5 ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Descrption</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table">
            
          {
            data.map((warehouse, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{warehouse.name}</td>
                  <td>{warehouse.description}</td>
                  <td>{warehouse.address}</td>
                  
                  
                  {/* <td>{user.hobbies.toString()}</td> */}
                  <td >
                  <div class = "btn-group">
                    {/* <button type="button" className="btn btn-primary me-2">Edit</button> */}
                    <button type="button" className="btn btn-primary me-2" onClick={() => userEdit(warehouse)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => userDelete(warehouse)}>Delete</button>
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

export default WHouseList
