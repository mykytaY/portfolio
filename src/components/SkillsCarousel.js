import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import css from '../images/skills/css.png';
import git from '../images/skills/git.png';
import html from '../images/skills/html.png';
import js from '../images/skills/js.png';
import nodejs from '../images/skills/nodejs.png';
import react from '../images/skills/react.png';
import swift from '../images/skills/swift.png';

const SkillsCarousel = () => {
    return (
        <Carousel 
        showArrows={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={1500}
        showStatus={false}
        >
            <>
                <img src={js} alt="JavaScript" />
                <div className='myCarousel'>
                    <h3>JavaScript</h3>
                </div>
            </>
            <>
                <img src={html} alt="HTML" />
                <div className='myCarousel'>
                    <h3>HTML</h3>
                </div>
            </>
            <>
                <img src={css} alt="CSS" />
                <div className='myCarousel'>
                    <h3>CSS</h3>
                </div>
            </>
            <>
                <img src={react} alt="React" />
                <div className='myCarousel'>
                    <h3>React</h3>
                </div>
            </>
            <>
                <img src={nodejs} alt="NodeJS" />
                <div className='myCarousel'>
                    <h3>nodeJS</h3>
                </div>
            </>
            <>
                <img src={git} alt="Git" />
                <div className='myCarousel'>
                    <h3>Git</h3>
                </div>
            </>
            <>
                <img src={swift} alt="Swift" />
                <div className='myCarousel'>
                    <h3>Swift</h3>
                </div>
            </>
        </Carousel >
    )
}

export default SkillsCarousel;