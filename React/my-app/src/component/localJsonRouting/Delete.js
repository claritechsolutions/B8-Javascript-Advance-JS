import React, { useState, useEffect } from "react";

import axios from "axios";
const Delete = () => {
  const [student, setStudent] = useState([]);
  const[id,setId]=useState(0);
  useEffect(() => {
    getUsers();
  }, [])

  function getUsers() {
    axios.get(`http://localhost:3001/student`)
      .then(response => {
        console.log(response.data)
        setStudent(response.data)
      })
  }

  function deleteUser(idx) {
    let ID;
    student.forEach((element, index) => {
      if (idx === index) {
        console.log(element.id);
        ID = element.id;
      }
    })
    axios.delete(`http://localhost:3001/student/${ID}`)
      .then(res => {
        console.log('one data deleted', res)
        getUsers()
      })
  }

  return (
    <>
      <div className="mt-3 container">
        <form>
          <table className="ctable">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {student.map((value,index) => {
                return (
                  <>
                    <tr>
                      <td>{index+1}</td>
                      <td>{value.name}</td>
                      <td>{value.branch}</td>
                      <td>
                        <button
                          className="btn-danger"
                          onClick={() => deleteUser(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Delete;
