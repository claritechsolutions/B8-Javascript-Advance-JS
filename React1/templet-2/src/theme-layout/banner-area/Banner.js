import React from 'react'

const Banner = () => {
    return (
        <>
            <section className="banner-area banner-bg">
                <div className="slider-active">
                    <div className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-0 order-lg-2">
                                    <div className="banner-img">
                                        <img src={process.env.PUBLIC_URL + "/img/slider/banner_img.png"} className="main-img" alt="" />
                                        <img src="img/slider/kb_slider_shape01.png" alt="" class="shape-1" />
                                        <img src="img/slider/kb_slider_shape02.png" alt="" class="shape-2" />
                                        <img src="img/slider/kb_slider_shape03.png" alt="" class="shape-3" />
                                        <img src="img/slider/kb_slider_shape04.png" alt="" class="shape-4 alltuchtopdown" />
                                        <img src="img/slider/kb_slider_shape05.png" alt="" class="shape-5 alltuchtopdown" />
                                        <img src="img/slider/kb_slider_shape06.png" alt="" class="shape-6" />
                                        <img src="img/slider/kb_slider_shape07.png" alt="" class="shape-7 rotateme" />
                                        <img src="img/slider/kb_slider_shape08.png" alt="" class="shape-8 rotateme" />
                                        <img src="img/slider/kb_slider_shape09.png" alt="" class="shape-9" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner-content">
                                        <div className="slider-caption">
                                            <div className="inner-layer">
                                                <span className="sub-title" data-animation="reveal-text" data-delay="1s"><span style={{ animationDelay: "1s" }}></span>Knowledge Base</span>
                                            </div>
                                        </div>
                                        <div className="slider-caption">
                                            <div className="inner-layer">
                                                <h2 className="title" data-animation="reveal-text" data-delay="2s"><span style={{ animationDelay: "2s" }}></span>Welcome! How
                                                    can we help?</h2>
                                            </div>
                                        </div>
                                        <div className="slider-caption">
                                            <div className="inner-layer">
                                                <p data-animation="fade-in-up" data-delay="3s">Knowledge Base Software. Start Your 14-day Free Trial with Cancel anytime. Easy setup</p>
                                            </div>
                                        </div>
                                        <div className="banner-btn" data-animation="fade-in-up" data-delay="3.5s">
                                            <a href="contact.html" className="btn"><i className="far fa-user"></i> Create an Account <span></span></a>
                                            <a href="contact.html" className="free-trial">Start 14-Day Free <i className="fas fa-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}
export default Banner
