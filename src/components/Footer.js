import React from 'react';
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
          <div className='row'>
              <div className='col-lg-8 col-sm-6 align-items-center footer-col'>
                  <div className='d-flex footer-text'>
                      <p>Built by Mykyta Yefremchenkov</p>
                  </div>
                  <div className='d-flex footer-text'>
                      <p>Halifax, Nova Scotia, Canada</p>
                  </div>
              </div>
              <div className='col-lg-4 col-sm-6 align-items-center'>
                  <div className='d-flex justify-content-center'>
                      <SocialIcon url='https://github.com/mykytaY' target="_blank" rel="noopener noreferrer" bgColor='#F7BF4F' className='mx-3'/>
                      <SocialIcon url='https://www.linkedin.com/in/mykyta-y/' target="_blank" rel="noopener noreferrer" bgColor='#F7BF4F' className='mx-3'/>
                      <SocialIcon url='https://www.facebook.com/nik.yefremchenkov' target="_blank" rel="noopener noreferrer" bgColor='#F7BF4F' className='mx-3'/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer;