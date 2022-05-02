import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>Hello, I am a</h1>
            <Typed
                className='typed-text'
                strings={['Front End Developer','Web Develper', "Web Designer"]}
                typeSpeed={80}
                backSpeed={40}
                loop
            />
            <a href='#'className='btn-main-contact'>Contact Me</a>
        </div>
    </div>
  )
}

export default Header