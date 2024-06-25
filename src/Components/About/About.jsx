import React from 'react';
import './About.css';

import theme_pattern from '../../assets/theme_pattern.svg';
// import profile_img from '../../assets/profile_img.png'; // Commented out as you removed it

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img src={profile_img} alt="Profile Image" /> */}
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <progress value={50} max={100}></progress>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <progress value={60} max={100}></progress>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <progress value={70} max={100}></progress>
            </div>
            <div className="about-skill">
              <p>Native</p>
              <progress value={40} max={100}></progress>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus earum amet quia? Alias earum voluptatibus eius assumenda nihil dicta!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis architecto recusandae sapiente deserunt excepturi quod ab repudiandae odit ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
