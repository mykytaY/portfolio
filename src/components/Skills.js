import React from 'react';
import SkillsCarousel from './SkillsCarousel';

const Skills = () => {
  return (
    <div id="skills" className='skills'>
        <h1>My Skills</h1>
        <div className='container'>
            <div className='skills-content'>
                <SkillsCarousel />
            </div>
        </div>
    </div>
  )
}

export default Skills;