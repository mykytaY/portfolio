import React from 'react';
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
          <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                  <div className='d-flex'>
                      <p>Built by Mykyta Yefremchenkov</p>
                  </div>
                  <div className='d-flex'>
                      <a href="mykyta.y@hotmail.com">mykyta.y@hotmail.com</a>
                  </div>
                  <div className='d-flex'>
                      <p>Halifax, Nova Scotia, Canada</p>
                  </div>
              </div>
              <div className='col-lg-3 col-md-2 col-sm-6'>
                  <div className='row'>
                      <div className='col'>
                          <a className='footer-nav'>Home</a><br/>
                          <a className='footer-nav'>About Me</a><br/>
                          <a className='footer-nav'>Skills</a>
                      </div>
                  </div>
              </div>
              <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                  <div className='d-flex justify-content-center'>
                      <SocialIcon url='https://github.com/mykytaY' bgColor='#F7BF4F' className='mx-3'/>
                      <SocialIcon url='https://www.linkedin.com/in/mykyta-y/' bgColor='#F7BF4F' className='mx-3'/>
                      <SocialIcon url='https://www.facebook.com/nik.yefremchenkov' bgColor='#F7BF4F' className='mx-3'/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer;