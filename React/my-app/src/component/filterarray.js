import React, { useState } from "react";

const ArrayMethods=()=>{
  
    var initialObj=[21,26,25,20,29];
    const [myArray,setArray]=useState(initialObj);

    let findAge=()=>setArray(myArray=>myArray.filter((age)=>age>25));

return(
    <> 
            <div>
               {myArray.map((value)=><p>{value}</p>)}
            </div>   
                {/* key are used to react to identify which item in the list are changed, updated, or deleted         */}
        <button onClick={findAge}>filter the age more than 25</button>
    </>
)
}
export default ArrayMethods;

