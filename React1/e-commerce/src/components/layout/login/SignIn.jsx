import React, { useEffect, useState } from 'react'
import '../../assets/css/style.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import axios from 'axios'

const SignIn = () => {
    const navigate = useNavigate();
    const [loginDetailsData, setLoginDetailsData] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        getLoginDetails();
    }, [])
    const getLoginDetails = () => {
        axios.get(`http://localhost:3001/LoginDetails`)
            .then((res) => {
                console.log("res", res);
                setLoginDetailsData(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    console.log("email", typeof (email));
    console.log("password", typeof (password));

    const getSignIn = () => {
        let result = loginDetailsData.filter((data) => data.email === email && data.password === password)
        console.log("result", result)

        if (result.length === 1) {
            alert("login successful");
            navigate('/');
        }
        else {
            alert("invalid Login details");
        }
    }
    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3"><b>Sign in</b></p>

                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    {/* <p className="text-center fw-bold mx-3 mb-0">Or</p> */}
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={getSignIn}>Login</button>
                                   
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?<NavLink to='/Signup' className="link-danger">Register</NavLink> </p>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SignIn