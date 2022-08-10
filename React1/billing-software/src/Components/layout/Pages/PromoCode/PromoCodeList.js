import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PromoCodeList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUserData()
  }, [])
  const loadUserData = () => {
    axios.get(' http://localhost:3001/promocode')
      .then((response) => setData(response.data))
      .catch((error) => console.error("error", error))
  }
  const userDelete = async (data) => {
    let response = await axios.delete(`http://localhost:3001/promocode/${data.id}`);
    if (response) {
      loadUserData();
    }
  }
  const userEdit = (data) => {
    navigate(`/updatepromocode/${data.id}`);
  }



  return (
    <div className="supplier bg-img">
      {/* <h3 className="mt-4 text-primary">**Supplier List**</h3> */}
      {console.log("data", data)}
      <table className="container table table-bordered mt-5 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Amount</th>
            <th scope="col">QTY</th>
            <th scope="col">ValidDate</th>

            {/* <th scope="col">Hobbies</th> */}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table">

          {
            data.map((promocode, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{promocode.code}</td>
                  <td>{promocode.amount}</td>
                  <td>{promocode.qty}</td>
                  <td>{promocode.validdate}</td>

                  {/* <td>{user.hobbies.toString()}</td> */}
                  <td >
                    <div class="btn-group">
                      {/* <button type="button" className="btn btn-primary me-3">Edit</button> */}
                      <button type="button" className="btn btn-primary me-2" onClick={() => userEdit(promocode)}>Edit</button>
                      <button type="button" className="btn btn-danger" onClick={() => userDelete(promocode)}>Delete</button>
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

export default PromoCodeList


