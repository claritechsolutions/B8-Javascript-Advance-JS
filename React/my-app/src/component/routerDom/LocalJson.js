import React, { useState, useEffect, useDebugValue } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PutData from "./PutData";

const LocalJson = () => {
  const navigate = useNavigate();
  const [studData, setStudData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/student")
      .then((response) => {
        console.log("respose==>", response);
        setStudData(response.data);
      })

      .catch((error) => console.log("error==>", error));
  }, []);

  //Post Data
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");

  const postData = () => {
    const val = {
      name,
      branch,
    };
    axios
      .post(`http://localhost:3001/student/`, val)
      .then((response) => {
        console.log(response.data);
        // setName(newName);
        // setBranch(newBranch);
      })
      .catch((error) => console.log(error));
  };
  //put Data
//   const[name,setName]=useState([]);
  const putData = (id) => {
 
    console.log(id);
    const newArr=studData.filter((value)=>value.id==id)
    console.log(newArr);
      document.getElementById("name1").value=newArr.name;
      document.getElementById("branch1").value=newArr.branch;
  
   
    // const val1 = {
    //     name,
    //     branch,
    //   };
    //   axios.put(`http://localhost:3001/student/`, val1)
    //   .then((response)=>{
    //         console.log(response.data);
    //   })
    //   .catch((error)=>console.log(error))
  };
  //Delete Data
  const DeleteData = (id) => {
    axios
      .delete(`http://localhost:3001/student/${id}`)
      .then((response) => console.log("Deleted Data", response))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div>
          <form>
            <div className="bg-light">
              <label>Name</label>
              <input
                type="text" id="name1"
                className="m-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Branch</label>
              <input
                type="text" id="branch1"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
              <button className="ms-2 btn btn-success" onClick={postData}>
                Post
              </button>
              <button className="ms-2 btn btn-success" onClick={putData}>
                Put
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-3 container">
        <table className="ctable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Branch</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {studData.map((value) => {
              return (
                <>
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.branch}</td>
                    <td>
                      
                        <button
                          className="btn btn-danger"
                          onClick={(e) => DeleteData(value.id)}>Delete</button>
                      <button
                        className="btn btn-success ms-4"
                        onClick={(e) => putData(value.id)}>edit
                      </button>
                    
                    </td>
                  </tr>
                  <tr>{postData}</tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LocalJson;
