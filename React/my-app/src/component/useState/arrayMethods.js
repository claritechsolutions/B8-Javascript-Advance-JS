import React, { useState } from 'react';

const Ganesh=()=>{
    const initialArr=[
        {
            fname:"dhanu",
            lname:"mane",
            branch: "cs"
        },
        {
            fname:"anu",
            lname:"mane",
            branch: "BSc"  
        },
        {
            fname:"Manu",
            lname:"patil",
            branch: "mech"
        }
    ]
    const[myarray, setArray]=useState(initialArr);
    
    let addData=()=>{
        let newArr=[...myarray];
        let newItem={
            fname:"ganesh",
            lname:"patil",
            branch: "Elec"
        }
        newArr.push(newItem);
        setArray(newArr);
    } 
    myarray.forEach((name)=>{
        console.log("name==",name.fname +" "+ name.lname);
        console.log("branch===",name.branch);
    })
    return(
        <>
            <div>
                {myarray.map((ele)=>{
                    return(
                    <p>hey my name is {ele.fname} and my branch is {ele.branch}</p>
                    )
                })
                }
            </div>
            <button onClick={addData}>Add Data</button>
           
        </>

    )

}

export default Ganesh

