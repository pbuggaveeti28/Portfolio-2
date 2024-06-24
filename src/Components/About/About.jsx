import React from 'react'
import './About.css'

import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern}/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                {/* <img src={profile_img}/> */}
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>Native</p><hr style={{width: "40%"}}/></div>
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
                <h1>
                    10+
                </h1>
                <p>Years of ecperience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>
                    90+
                </h1>
                <p>Projects completed</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>
                    15+
                </h1>
                <p>happy clients</p>
            </div>
        </div>
    </div>
  )
}

export default About