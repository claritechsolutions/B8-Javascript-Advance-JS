import React, { useState, useEffect } from "react";
import axios from "axios";

const PostData = () => {
  const [student, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [count,setCount]=useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/student`)
      .then((response) => {
        console.log(response);
        setStudent(response.data);
      })

      .catch((error) => console.log(error));
  }, []);
  const postData = () => {
    const val = {
      name,
      branch,
    };


    if (name==="" && branch==="") {
      alert("Fields are required");
      count=2;
      
    } else {
      student.forEach((data) => {
        if (data.name === name && data.branch === branch) {
          alert("Record already exist in db");
          count=2;
        }
      });
    }
    if(count!==2){
      axios
        .post(`http://localhost:3001/student/`, val)
        .then((response) => {
          console.log(response.data);
          setStudent(response.data);

        })
        .catch((error) => console.log(error));
    }

  };

  return (
    <>
      <div className="mt-3 container">
        <div>
          <form>
            <div className="bg-light">
              <label>Name</label>
              <input
                type="text"
                id="name1"
                className="m-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br></br>
              <label>Branch</label>
              <input
                type="text"
                id="branch1"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
              <br></br>
              <button className="m-4 btn btn-success" onClick={postData}>
                Post
              </button>
            </div>
          </form>
        </div>
        <div>
          <table className="ctable">
            <thead>
              <tr>
                <th>sr.No</th>
                <th>Name</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {student.map((value, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{value.name}</td>
                      <td>{value.branch}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PostData;
