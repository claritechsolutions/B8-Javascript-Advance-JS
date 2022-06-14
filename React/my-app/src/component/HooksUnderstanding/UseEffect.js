import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [width, setWidth] = useState(window.screen.width);

  const actualWidth=()=>{
    //   console.log(window.innerWidth);
      setWidth(window.innerWidth);
  }
  useEffect(() => {
    console.log("Add event");
    window.addEventListener("resize", actualWidth);
    return()=>{
      console.log("remove Event");
      window.removeEventListener("resize",actualWidth);
    }
  })
  return (
  <>
    <div>Current Window Size</div>
    <h1>{width}</h1>
  </>
  
  )
};

export default UseEffect;
