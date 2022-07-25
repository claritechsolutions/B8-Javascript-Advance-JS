import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
    firstName: '',
    lastName: '',
    age: '',
    education: '',
    designation: '',
    email: '',
    password: '',
    mobile: '',
    gender: '',
    hobbies: []
}

const CreateUser = () => {
    const [formState, setFormState] = useState(initialState);
    const createUser = () => {
        axios.post('http://localhost:3001/user', formState)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const formValueChange = (event, fieldType) => {
        let newState = { ...formState };
        switch (fieldType) {
            case "FIRST_NAME":
                newState.firstName = event.target.value
                break;
            case "LAST_NAME":
                newState.lastName = event.target.value
                break;
            case "EDUCATION":
                newState.education = event.target.value
                break;
            // email
            case "EMAIL":
                newState.email = event.target.value
                break;
            // number
            case "AGE":
                newState.age = event.target.value
                break;
            // password
            case "PASSWORD":
                newState.password = event.target.value
                break;
            // text
            case "MOBILE_NO":
                newState.mobile = event.target.value
                break;
            case "DESIGNATION":
                newState.designation = event.target.value
                break;
            case "GENDER":
                newState.gender = event.target.value;
                break;
            case "MOVIES":
                if (event.target.checked) {
                    newState.hobbies.push("movies");
                } else {
                    let indexOfMovie = newState.hobbies.indexOf("movies");
                    if (indexOfMovie > -1) {
                        newState.hobbies.splice(indexOfMovie, 1);
                    }
                }
                break;
            case "GAMING":
                if (event.target.checked) {
                    newState.hobbies.push("gaming");
                } else {
                    let indexOfGaming = newState.hobbies.indexOf("gaming");
                    if (indexOfGaming > -1) {
                        newState.hobbies.splice(indexOfGaming, 1);
                    }
                }
                break;
            case "CODING":
                if (event.target.checked) {
                    newState.hobbies.push("coding");
                } else {
                    let indexOfCoding = newState.hobbies.indexOf("coding");
                    if (indexOfCoding > -1) {
                        newState.hobbies.splice(indexOfCoding, 1);
                    }
                }
                break;
            case "TRAVELLING":
                if (event.target.checked) {
                    newState.hobbies.push("travelling");
                } else {
                    let indexOfTravelling = newState.hobbies.indexOf("travelling");
                    if (indexOfTravelling > -1) {
                        newState.hobbies.splice(indexOfTravelling, 1);
                    }
                }
                break;
            default:
                break;
        }
        setFormState({ ...newState });
    }




    return (
        <div>
            <form>
                <h3 className="mt-3 text-primary"> Fill Your Information</h3>
                <div className="form-group row my-2">
                    <label className="col-sm-2 col-form-label"><b>First Name</b></label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={(event) => formValueChange(event, "FIRST_NAME")} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-2 col-form-label"><b>Last Name</b></label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={(event) => formValueChange(event, "LAST_NAME")} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-2 col-form-label"><b>Age</b></label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" onChange={(event) => formValueChange(event, "AGE")} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-2 col-form-label"><b>Education</b></label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={(event) => formValueChange(event, "EDUCATION")} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-2 col-form-label"><b>Designation</b></label>
                    <div className="col-sm-10">
                        <select className="form-control random-class" onChange={(event) => formValueChange(event, "DESIGNATION")}>
                            <option>Software Developer</option>
                            <option>QA Enginner</option>
                            <option>Manager</option>
                            <option>CEO</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-2 col-form-label"><b>Email</b></label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" onChange={(event) => formValueChange(event, "EMAIL")} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-2 col-form-label"><b>Password</b></label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" onChange={(event) => formValueChange(event, "PASSWORD")} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-2 col-form-label"><b>Mobile No</b></label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={(event) => formValueChange(event, "MOBILE_NO")} />
                    </div>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0"><b>Gender</b></legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="male" onChange={(event) => formValueChange(event, "GENDER")} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="female" onChange={(event) => formValueChange(event, "GENDER")} />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group row my-2">
                    <div className="col-sm-2"><b>Hobbies</b></div>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="movies" onChange={(event) => formValueChange(event, "MOVIES")} />
                            <label className="form-check-label" >
                                Movies
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="gaming" onChange={(event) => formValueChange(event, "GAMING")} />
                            <label className="form-check-label" >
                                Gaming
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="coding" onChange={(event) => formValueChange(event, "CODING")} />
                            <label className="form-check-label" >
                                Coding
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="travelling" onChange={(event) => formValueChange(event, "TRAVELLING")} />
                            <label className="form-check-label" >
                                Travelling
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row my-2">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary " onClick={() => createUser()}>Create User</button>
                    </div>
                </div>
            </form>
        </div>

    )
}



export default CreateUser
