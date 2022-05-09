import React from 'react';
import Typed from 'react-typed';
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <div id='home' className='header-wrapper'>
        <div className='main-info'>
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
            <Link smooth={true} to="about" offset={-90} href='#'className='btn-main'>Learn More About Me</Link>
        </div>
    </div>
  )
}

export default Header;