import React, { useState, useEffect, useDebugValue } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const PutData=()=> {
  return (
      <>
     <h1> hello</h1>
      <div className="container">
        <h1>Edit Data</h1>
        <label>Name</label>
        <input type="text"/>
        <label>Branch</label>
        <input type="text"/>

    </div>
    </>
  )
}
export default PutData
