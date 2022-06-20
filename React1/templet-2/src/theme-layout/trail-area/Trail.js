import React from 'react'

const Trail = () => {
    return (
        <>
             <section className="trial-area">
                <div className="container">
                    <div className="container-inner-wrap">
                        <div className="row">
                            <div className="col-12">
                                <div className="kb-trial-wrap">
                                    <h2 className="title">Are you ready to get your business grossing</h2>
                                    <div className="kb-trial-form">
                                        <form action="#">
                                            <input type="email" placeholder="Email address"/>
                                            <button className="btn">14-day Free Trial <span></span></button>
                                        </form>
                                    </div>
                                    <img src="img/images/trial_shape01.png" alt="" className="trial-shape top-shape wow fadeInDownBig" data-wow-delay=".3s"/>
                                    <img src="img/images/trial_shape02.png" alt="" className="trial-shape bottom-shape wow fadeInUpBig" data-wow-delay=".3s"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trail
