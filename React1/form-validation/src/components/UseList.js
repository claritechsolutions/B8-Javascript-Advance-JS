import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../Redux/User/userSlice';

const UseList = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  // const userData = useSelector(state => state.users.data)


  useEffect(() => {
    loadUserData()
  }, [])


  // useEffect(() => {
  //   if (userData.length) {
  //     setData(userData);
  //   }
  // }, [userData])
  // const loadUserData = () => {
  //   dispatch(fetchUsers())
  // }

  const userDelete = async (data) => {
    let response = await axios.delete(`http://localhost:3001/user/${data.id}`);
    if (response) {
      loadUserData();
    }
  }
  const loadUserData = () => {
    axios.get('http://localhost:3001/user')
      .then((response) => setData(response.data))
      .catch((error) => console.error("error", error))
  }
  const userEdit = (data) => {
    navigate(`/updateuser/${data.id}`);
  }


  return (
    <div>
      <h3 className="mt-4 text-primary">**Users List**</h3>
      {console.log("data", data)}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Education</th>
            <th scope="col">Designation</th>
            <th scope="col">Hobbies</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>{user.education}</td>
                  <td>{user.designation}</td>
                  <td>{user.hobbies.toString()}</td>
                  <td >
                    {/* <button type="button" className="btn btn-primary me-2">Edit</button> */}
                    <button type="button" className="btn btn-primary me-2" onClick={() => userEdit(user)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => userDelete(user)}>Delete</button>
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

export default UseList