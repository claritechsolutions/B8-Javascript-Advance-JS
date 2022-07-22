import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Mainbody = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="card mb-3 border-0 bg-light" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={process.env.PUBLIC_URL + '/images/homepage/home.jpg'} className="img-fluid d-flex flex-start mt-0" alt="" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title">AUTOMATIC WATCHES, INSPIRED BY INDIA.</h5>
                                <p className="card-text">All great achievements require time.</p>
                                <p className="card-text"><small className="text-muted">Buying watches should leave you happy and good-looking, with money in your pocket.</small></p>
                                <button className='bg-dark text-white p-3'>Shop Now  <span><AiOutlineArrowRight /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mainbody