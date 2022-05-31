import React, { useState } from "react";

const Practice = () => {
  var initialObj = [
    { id: 1, fname: "dhanu", age: 25, branch: "cse" },
    { id: 2, fname: "manu", age: 26, branch: "mech" },
    { id: 3, fname: "anu", age: 24, branch: "ele" },
    { id: 4, fname: "vanu", age: 27, branch: "mech" },
  ];

  const [myArray, setArray] = useState(initialObj);

  const forEData = () => {
    myArray.forEach((name) => {
        document.write("Name===" + " " + name.fname);
        document.write(" ||  Branch===" + " " + name.branch + "</br>");
      });
      // return (
      //   <div>
      //         hey my name is{name.fname} and and Branch is {name.branch}
      //   </div>
      // );
      // });
  };

  const createData=()=>{
    let newData=[...myArray];
    let newMem={fname: "raj", age: 29, branch: "civil"}
    newData.push(newMem);
    setArray(newData);
  }
  
  const removeData = (id) => {
    // alert(id);
    const newArray = myArray.filter((ele) => {
      return ele.id !== id;
    });
    setArray(newArray);
  };
  return (
    <>
      <h3>Using Map</h3>
      <div>
        {myArray.map((element) => {
          return (
            <p key={element.id}>
              <b>Name :</b>  {element.fname}  <b>Age :</b> : {element.age} <b> Branch : </b>
              {element.branch}
              <br></br>{" "}
              <button onClick={()=>removeData(element.id)}>remove</button>
            </p>
          );
        })}
      </div>
      <button onClick={forEData}>Display Data</button>
      <button onClick={createData}>AddItem</button>
    </>
  );
};
export default Practice;
