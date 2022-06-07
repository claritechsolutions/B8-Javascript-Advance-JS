import axios from 'axios';
import React, { useEffect, useState } from 'react'
function UpdateData() {
  const [info, setInfo] = useState([])
  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [ind, setInd] = useState();
  console.log("Index",ind);
  useEffect(() => {
    getUsers();
  }, [])

  function getUsers() {
    axios.get(`http://localhost:3001/student`)
      .then(response => {
        console.log(response.data)
        setInfo(response.data)

      })
  }

  function selectUser(idx) {
    let item1 = info[idx];
    console.log(info[idx]);
    setName(item1.name)
    setBranch(item1.branch);
    setInd(idx);
    
  }
  
  const handleSubmit = () => {
    let data = {
      name, branch
    }
    console.log("Index",ind);
    let ID;
    info.forEach((element, index) => {
      if (ind === index) {
        console.log(element.id);
        ID = element.id;
      }
    })
    axios.put(`http://localhost:3001/student/${ID}`, data)
      .then(response => {
        console.log("data posted into json file", response.data);
      })
      .catch(error => {
        console.log("ERROR ==>", error);
      })
    getUsers()
  }

  return (
    <>
      <div className="App">
        <table className="ctable">
          <thead style={{ border: '2px solid black' }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              info.map((item, index) =>
                <tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.branch}</td>
                  <td><button onClick={() => selectUser(index)}>Update</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
        <form>
          <div className="container p-3 bg-dark text-white">
            <h5 className="d-inline-block mb-3">PUT request using axios</h5>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
              <label htmlFor="email" className="mt-2">Branch</label>
              <input type="text" className="form-control" id="author" value={branch} onChange={e => setBranch(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-warning mt-3" onClick={handleSubmit}>Update User</button>
          </div >
        </form>
      </div>
    </>
  );
}
export default UpdateData;