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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in luctus augue. In ullamcorper mi odio, vel euismod enim consectetur vel. Donec vel urna pharetra, ultricies justo vitae, porttitor sem. Etiam quam nunc, posuere sit amet mi id, ultrices tempus purus. In nec mauris et ante imperdiet blandit ac et lacus. In dictum ante eu turpis varius pharetra. Duis rutrum non nisl in pulvinar. Suspendisse auctor turpis eu sem condimentum volutpat. Etiam faucibus elit vel purus posuere, ut dapibus est malesuada. Integer mattis velit laoreet eros dignissim, vitae viverra erat venenatis. Nulla interdum vestibulum libero, ac facilisis diam hendrerit a. Duis nec faucibus orci. Phasellus vel eros non leo tristique varius id at lectus. Vivamus id sagittis orci, sed condimentum dolor. Nullam eget metus in quam congue molestie.

                Phasellus elit odio, vehicula in interdum vitae, laoreet id felis. In ut faucibus elit. Curabitur dapibus condimentum lacus, eget pretium erat fringilla eu. In a dolor nisl. Fusce sodales faucibus elementum. Suspendisse eu lobortis urna. Integer commodo, nisl id tristique maximus, nulla lorem eleifend magna, sit amet mattis quam nunc eu lorem. In posuere porttitor enim, sed tincidunt libero sodales eu. Aenean mattis semper nisi, vel consequat dui suscipit a. Ut congue mattis nulla nec ornare. Quisque molestie lectus ipsum, et dapibus nibh dictum eget. Ut luctus hendrerit dui a ullamcorper. Praesent vel cursus dui.
              </p>
          </div>
      </div>
    </div>
  )
}

export default AboutMe;