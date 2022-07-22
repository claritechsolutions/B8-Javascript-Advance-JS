import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../../assets/css/style.css'
const Signup = () => {
    const initialVal = {
        fname: '',
        lname: '',
        mobileNO: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [data, setData] = useState([]);
    const [registerData, setRegisterData] = useState(initialVal);
    const [count,setCount]=useState(0);

    useEffect(() => {
        getLoginDetails();
    }, [])

    const getLoginDetails = () => {
        axios.get(`http://localhost:3001/LoginDetails`)
            .then((response) => {
                console.log(response)
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const postLoginData = () => {

        if (registerData.confirmPassword === registerData.password) {
            axios.post(`http://localhost:3001/LoginDetails/`, registerData)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        }
        else {
            alert("password doesnt match");
          
        }

    }
    // console.log("fname", registerData.fname);
    // console.log("lname", registerData.lname);
    // console.log("mobile", registerData.mobileNO);
    // console.log("email", registerData.email);
    // console.log("password", registerData.password);
    // console.log("confirmPass", registerData.confirmPassword);


    return (
        <>
            {/* <!-- Section: Design Block --> */}
            <section className="background-radial-gradient overflow-hidden">


                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                The best offer <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>for your business</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form>
                                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                        <h4 className='mb-3'>Register Here</h4>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control" value={registerData.fname} onChange={e => setRegisterData({ ...registerData, fname: e.target.value })} />
                                                    <label className="form-label" for="form3Example1">First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example2" className="form-control" value={registerData.lname} onChange={e => setRegisterData({ ...registerData, lname: e.target.value })} />
                                                    <label className="form-label" for="form3Example2" >Last name</label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile No */}

                                        <div className="form-outline mb-4">
                                            <input type="number" id="form3Example3" className="form-control" value={registerData.mobileNO} onChange={e => setRegisterData({ ...registerData, mobileNO: e.target.value })} />
                                            <label className="form-label" for="form3Example3">Mobile Number</label>
                                        </div>



                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example4" className="form-control" value={registerData.email} onChange={e => setRegisterData({ ...registerData, email: e.target.value })} />
                                            <label className="form-label" for="form3Example4">Email address</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example5" className="form-control" value={registerData.password} onChange={e => setRegisterData({ ...registerData, password: e.target.value })} />
                                            <label className="form-label" for="form3Example5">Password</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example6" className="form-control" value={registerData.confirmPassword} onChange={e => setRegisterData({ ...registerData, confirmPassword: e.target.value })} />
                                            <label className="form-label" for="form3Example6" >Confirm Password</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                            <label className="form-check-label" for="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={postLoginData}>
                                            Sign up
                                        </button>

                                        {/* <!-- Register buttons --> */}
                                        {/* <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
        </>
    )
}

export default Signup