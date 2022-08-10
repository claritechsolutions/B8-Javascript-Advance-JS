import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
    owner: '',
    sales: ''
}
const Roles = () => {
    const [formState, setFormState] = useState(initialState);
    let params = useParams();
    const navigate = useNavigate();
    const [editUser, setEditUser] = useState(Object.keys(params).length !== 0 ? true : false)
    useEffect(() => {
        if (editUser) {
            axios.get(` http://localhost:3001/roles/${params?.id}`)
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
        axios.get(` http://localhost:3001/roles`)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))
    }
    const createProduct = () => {
        if (editUser) {
            axios.put(` http://localhost:3001/roles/${params?.id}`, formState)
              .then((response) => {
                let newState = { ...initialState };
                // newState.hobbies = [];
                setFormState(newState);
                navigate('/');
              })
              .catch((error) => console.log(error))
          } else {
            axios.post(' http://localhost:3001/roles', formState)
              .then((response) => {
                let newState = { ...initialState };
                // newState.hobbies = [];
                setFormState(newState);
              })
              .catch((error) => console.log(error))
          }

        // console.log(formState)
        // axios.post(`http://localhost:3001/roles`, formState)
        //     .then((response) => console.log(response.data))
        //     .catch((error) => console.log(error))
    }
    const formValueChange = (event, fieldType) => {
        let newState = { ...formState };
        switch (fieldType) {
            case "OWNER":
                newState.owner = event.target.value
                break;

            case "SALES":
                newState.sales= event.target.value
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
                <h3 className="mt-3 text-primary">{!editUser ? 'Create' : 'Update'} Roles</h3>
                    <label className="col-sm-2 col-form-label">owner</label>
                    <div className="col-sm-10 my-2">
                        <input type="text" className="col-sm-2 form-control" onChange={(event) => formValueChange(event, "OWNER")} />
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-2 form-label">Sales</label>
                        <div className="col-sm-10 ">
                            <input type="text" className="col-sm-2 form-control" onChange={(event) => formValueChange(event, "SALES")} />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary" onClick={() => createProduct()}>{!editUser ? 'Create' : 'Update'} Roles</button>
                            {/* <button  className="btn btn-primary" onClick={() => {createProduct() }}>Category</button> */}
                        </div>
                    </div>
                </div>
            {/* </form> */}
        </div>
    )
}

export default Roles
