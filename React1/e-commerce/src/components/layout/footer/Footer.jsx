import React from 'react'
import { MdFacebook } from 'react-icons/md'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark py-3 text-white mt-5">
        <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <p>&copy; All Copyrights reserved</p>
          </div>
          <div className="col-lg-6">
            <div className='d-flex flex-row'>
              <div>
                <p className='mb-3 me-3'>Follow Us on :</p>
              </div>
              <div>
                <a href="https://www.facebook.com/" target={'_blank'} className='fs-4 mx-2 text-white'><MdFacebook /></a>
                <a href="https://twitter.com/" target={'_blank'} className='fs-4 mx-2 text-white'><TiSocialTwitterCircular /></a>
                <a href="https://in.linkedin.com/" target={'_blank'} className='fs-4 mx-2 text-white'><TiSocialLinkedinCircular /></a>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer