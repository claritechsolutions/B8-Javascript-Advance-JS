import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
    name: '',
    description: ''
}
const Product = () => {
    const [formState, setFormState] = useState(initialState);
    let params = useParams();
    const navigate = useNavigate();
    const [editUser, setEditUser] = useState(Object.keys(params).length !== 0 ? true : false)
    useEffect(() => {
        if (editUser) {
            axios.get(`http://localhost:3001/product/${params?.id}`)
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
        axios.get(`http://localhost:3001/product`)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))
    }
    const createProduct = () => {
        if (editUser) {
            axios.put(`http://localhost:3001/product/${params?.id}`, formState)
              .then((response) => {
                let newState = { ...initialState };
                // newState.hobbies = [];
                setFormState(newState);
                navigate('/');
              })
              .catch((error) => console.log(error))
          } else {
            axios.post('http://localhost:3001/product', formState)
              .then((response) => {
                let newState = { ...initialState };
                // newState.hobbies = [];
                setFormState(newState);
              })
              .catch((error) => console.log(error))
          }

        // console.log(formState)
        // axios.post(`http://localhost:3001/product`, formState)
        //     .then((response) => console.log(response.data))
        //     .catch((error) => console.log(error))
    }
    const formValueChange = (event, fieldType) => {
        let newState = { ...formState };
        switch (fieldType) {
            case "CATEGORY":
                newState.name = event.target.value
                break;

            case "DESCRIPTION":
                newState.description = event.target.value
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
                <h3 className="mt-3 text-primary">{!editUser ? 'Create' : 'Update'} Category</h3>
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10 my-2">
                        <input type="text" className="col-sm-2 form-control" onChange={(event) => formValueChange(event, "CATEGORY")} />
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-2 form-label">Description</label>
                        <div className="col-sm-10 ">
                            <input type="text" className="col-sm-2 form-control" textarea name="message" style={{ width: "300px", height: "300px" }} onChange={(event) => formValueChange(event, "DESCRIPTION")} />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary" onClick={() => createProduct()}>{!editUser ? 'Create' : 'Update'} Category</button>
                            {/* <button  className="btn btn-primary" onClick={() => {createProduct() }}>Category</button> */}
                        </div>
                    </div>
                </div>
            {/* </form> */}
        </div>
    )
}

export default Product
