import React from 'react';
import Typed from 'react-typed';
import { Image } from 'react-bootstrap';
import image from '../IMG_7656.JPG';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
          {/* <Image src={image} thumbnail/> */}
            <h3>Hi, my name is</h3>
            <h1>Mykyta Yefremchenkov.</h1>
            <h2>I am a junior</h2>
            <Typed
                className='typed-text'
                strings={['Front End Developer','Web Develper', "Web Designer"]}
                typeSpeed={80}
                backSpeed={40}
                loop
            />
            <a href='#'className='btn-main-about'>Learn More About Me</a>
        </div>
    </div>
  )
}

export default Header