import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>Web Development and Website Promotion</h1>
            <Typed
                className='typed-text'
                strings={['Front End Development','Web Develpment', "Web Design"]}
                typeSpeed={80}
                backSpeed={40}
                loop
            />
            <a href='#'className='btn-main-offer'>Contact Me</a>
        </div>
    </div>
  )
}

export default Header