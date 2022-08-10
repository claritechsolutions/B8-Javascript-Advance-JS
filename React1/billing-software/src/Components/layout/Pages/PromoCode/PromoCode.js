import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
    code: '',
    amount: '',
    qty: '',
    validdate: ''
   
}
const PromoCode = () => {
    const [formState, setFormState] = useState(initialState);
    let params = useParams();
    const navigate = useNavigate();
    const [editUser, setEditUser] = useState(Object.keys(params).length !== 0 ? true : false)
    useEffect(() => {
        if (editUser) {
            axios.get(`http://localhost:3001/promocode/${params?.id}`)
                .then((response) => updateUserFormData(response?.data))
                .catch((error) => console.log(error));
        }
    }, [])
    const updateUserFormData = (data) => {
        setFormState({ ...data });
    }


    useEffect(()=>{
        getData();
     },[])
     const getData=()=>{
         axios.get('http://localhost:3001/promocode')
             .then((response) => console.log(response.data))
             .catch((error) => console.log(error))  
     }
    
    const createUser = () => {   
        if (editUser) {
            axios.put(`http://localhost:3001/promocode/${params?.id}`, formState)
              .then((response) => {
                let newState = { ...initialState };
                // newState.hobbies = [];
                setFormState(newState);
                navigate('/');
              })
              .catch((error) => console.log(error))
          } else {
            axios.post('http://localhost:3001/promocode', formState)
              .then((response) => {
                let newState = { ...initialState };
                // newState.hobbies = [];
                setFormState(newState);
              })
              .catch((error) => console.log(error))
          }

            // axios.post(`http://localhost:3001/promocode`, formState)
            // .then((response) => console.log(response))
            // .catch((error) => console.log(error))                
    }
    const formValueChange = (event, fieldType) => {
        let newState = { ...formState };
        switch (fieldType) {
            case "CODE":
                newState.code = event.target.value
                break;
            
            case "AMOUNT":
                newState.amount= event.target.value
                break;
            case "QTY":
                newState.qty = event.target.value
                break;
        
            case "VALIDDATE":
                newState.validdate = event.target.value
                break;
            default:
                break;
        }
        setFormState({ ...newState });
    }
    return (
        <div className="customer random-class mt-5 bg-img">
            {/* <form className="mt-5"> */}
                <div className="container  form-group row my-3 ">
                <h3 className="mt-3 text-primary">{!editUser ? 'Create' : 'Update'}  Promocode</h3>
                    <label className="col-sm-2 col-form-label">Code</label>
                    <div className="col-sm-10 my-4">
                        <input type="text" className="col-sm-2 form-control" onChange={(event) => formValueChange(event, "CODE")}  />
                    </div>
                    <div className="form-group row my-2">
                        <label  className="col-sm-2 form-label">Amount</label>
                        <div className="col-sm-10 my-2">
                            <input type="number" className="col-sm-2 form-control" onChange={(event) => formValueChange(event, "AMOUNT")}  />
                        </div>
                    </div>
                   
                    <div className="form-group row my-2">
                        <label  className="col-sm-2 form-label">QTY</label>
                        <div className="col-sm-10 my-2">
                            <input type="text" className="col-sm-2 form-control" onChange={(event) => formValueChange(event, "QTY")}  />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label  className=" col-sm-2 form-label">Valid_Date</label>
                        <div className="col-sm-10 my-2">
                            <input type="date" className="col-sm-2 form-control" onChange={(event) => formValueChange(event, "VALIDDATE")} />
                        </div>
                    </div>
                    
           
                    <div className="form-group row my-2">
                        <div className="col-sm-10">
                            {/* <button  className="btn btn-primary" onClick={() => {createUser()}}>
                                Promocode
                            </button> */}
                            <button type="submit" className="btn btn-primary" onClick={() => createUser()}>{!editUser ? 'Create' : 'Update'} Promocode</button>
                        </div>
                    </div>
                </div>
            {/* </form> */}
        </div>
    )
}

export default PromoCode

