import React from 'react';
import { Image } from 'react-bootstrap';
import image from '../images/IMG_7656.JPG';

const AboutMe = () => {
  return (
    <div id="about" className='container py-5'>
      <div className='row'>
          <div className='col-lg-6 col-xm-12'>
              <div className='photo-wrap mb-5'>
                <Image src={image} alt="Picture of me" className='profile-img'/> 
              </div>
          </div>
          <div className='col-lg-6 col-xm-12'>
              <h1 className='about-heading'>About Me</h1>
              <p className='about-paragraph'>
                I am a <span>Full Stack Developer</span> with interest in <span>Front End Development and Design.</span><br/>
                I have background in <span>Business and Marketing</span> but I always loved working with Tech.<br/>
                I am a <span>fast-learner,</span> ambitious, goal-oriented person with an eye for style and <span>attention to detail.</span><br/>
                I like working in a team setting but I can also be a very independant employee.
              </p>
          </div>
      </div>
    </div>
  )
}

export default AboutMe;