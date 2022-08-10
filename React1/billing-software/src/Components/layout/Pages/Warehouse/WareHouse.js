import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
const initialState = {
    name: '',
    description: '',
    address: ''

}
const WareHouse = () => {
    const [formState, setFormState] = useState(initialState);
    let params = useParams();
        const navigate = useNavigate();
        const [editUser, setEditUser] = useState(Object.keys(params).length !== 0 ? true : false)
        useEffect(() => {
            if (editUser) {
                axios.get(`http://localhost:3001/warehouse/${params?.id}`)
                    .then((response) => updateUserFormData(response?.data))
                    .catch((error) => console.log(error));
            }
        }, [])
        const updateUserFormData = (data) => {
            setFormState({ ...data });
        }

    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        axios.get('http://localhost:3001/warehouse')
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))
    }

    const createUser = () => {
        
        if (editUser) {
            axios.put(`http://localhost:3001/warehouse/${params?.id}`, formState)
              .then((response) => {
                let newState = { ...initialState };
                // newState.hobbies = [];
                setFormState(newState);
                navigate('/');
              })
              .catch((error) => console.log(error))
          } else {
            axios.post('http://localhost:3001/warehouse', formState)
              .then((response) => {
                let newState = { ...initialState };
                // newState.hobbies = [];
                setFormState(newState);
              })
              .catch((error) => console.log(error))
          } 

        // axios.post('http://localhost:3001/warehouse', formState)
        //     .then((response) => console.log(response.data))
        //     .catch((error) => console.log(error))
    }
    const formValueChange = (event, fieldType) => {
        let newState = { ...formState };
        switch (fieldType) {
            case "NAME":
                newState.name = event.target.value
                break;

            case "DESCRIPTION":
                newState.description = event.target.value
                break;

            case "ADDRESS":
                newState.address = event.target.value
                break;

            default:
                break;
        }
        setFormState({ ...newState });
    }

    return (
        <div className="customer mt-5 bg-img">
            <form className="mt-5">
                <div className="container  form-group row my-3 ">
                <h3 className="mt-3 text-primary">{!editUser ? 'Create' : 'Update'}  WareHouse</h3>
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10 my-2">
                        <input type="text" className="col-sm-2 form-control" onChange={(event) => formValueChange(event, "NAME")} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-2 form-label">Description</label>
                    <div className="col-sm-10 ">
                        <input type="text" className="col-sm-2 form-control" onChange={(event) => formValueChange(event, "DESCRIPTION")} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-2 form-label">Address</label>
                    <div className="col-sm-10 my-2">
                        <input type="text" className=" col-sm-2 form-control" onChange={(event) => formValueChange(event, "ADDRESS")} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={() => createUser()}>{!editUser ? 'Create' : 'Update'} WareHouse</button>
                        {/* <button  className="btn btn-primary" onClick={() => createUser() }>Warehouse</button> */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default WareHouse
