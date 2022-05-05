import React from 'react';
import { Image } from 'react-bootstrap';
import image from '../IMG_7656.JPG';

const AboutMe = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
          <div className='col-lg-6 col-xm-12'>
              <div className='photo-wrap mb-5'>
                <Image src={image} alt="Picture of me" className='profile-img'/> 
              </div>
          </div>
          <div className='col-lg-6 col-xm-12'>
              <h1 className='about-heading'>About Me</h1>
              <p>
                Hello, My name is Mykyta and I love coding and design.
                I have background in Business and Marketing but I always had love for Tech and Design.
                Here I am, doing what excites me!
                I am a Junior Full Stack Developer with interest in Front End Development and Design. I love to see what I make!
                I am a fast-learner, ambitios, goal-oriented person with an eye for style and attention to detail.
                I like to communicate and am a good team player but I can also be very independant employee.
              </p>
          </div>
      </div>
    </div>
  )
}

export default AboutMe;