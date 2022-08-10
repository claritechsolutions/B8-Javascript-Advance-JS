import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const RolesList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadUserData()
    }, [])
    const loadUserData = () => {
        axios.get('http://localhost:3001/roles')
            .then((response) => setData(response.data))
            .catch((error) => console.error("error", error))
    }
    const userDelete = async (data) => {
      let response = await axios.delete(`http://localhost:3001/roles/${data.id}`);
      if (response) {
        loadUserData();
      }
    }
    const userEdit = (data) => {
      navigate(`/updateroles/${data.id}`);
    }
    return (
        <div className='bg-img'>
            <table className=" container table table-bordered mt-5 ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Sales</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table">
            
          {
            data.map((roles, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{roles.owner}</td>
                  <td>{roles.sales}</td>
                  
                  {/* <td>{user.hobbies.toString()}</td> */}
                  <td >
                  <div class = "btn-group">
                    {/* <button type="button" className="btn btn-primary me-2">Edit</button> */}
                    <button type="button" className="btn btn-primary me-2" onClick={() => userEdit(roles)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => userDelete(roles)}>Delete</button>
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

export default RolesList
